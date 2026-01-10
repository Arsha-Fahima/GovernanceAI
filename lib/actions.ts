'use server';

import { createServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { GSTDetails, ReminderSettings, User } from '@/types';

// Constants
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:8000';

/**
 * UTILS: Internal fetch helper with better error handling
 */
async function backendFetch(path: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${BACKEND_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const message = errorData.detail || errorData.message || 'Backend service error';
      throw new Error(typeof message === 'object' ? JSON.stringify(message) : message);
    }

    return response.json();
  } catch (err: any) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      throw new Error('Backend service is offline. Please start the Python server.');
    }
    throw err;
  }
}

// --- ADMIN ACTIONS ---

/**
 * Fetch all users with their related GST and Reminder data
 */
export async function getAllUsers() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('users')
    .select('*, gst_details(*), reminder_settings(*)')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to load users');
  }
  return data;
}

/**
 * Create or Update a full client profile (Admin side)
 */
export async function adminCreateUser(data: {
  whatsapp_number: string;
  full_name: string;
  gstin: string;
  business_name: string;
  state: string;
  filing_type: 'monthly' | 'qrmp';
  next_reminder_date?: string;
}) {
  const supabase = createServerClient();

  try {
    // 1. Sync User Profile
    const { error: userErr } = await supabase.from('users').upsert({
      whatsapp_number: data.whatsapp_number,
      full_name: data.full_name,
      role: 'client',
      is_active: true
    });
    if (userErr) throw new Error(`User Sync Error: ${userErr.message}`);

    // 2. Sync GST Details via Python Backend (Business logic for PAN extraction)
    await backendFetch('/api/gst/upsert', {
      method: 'POST',
      body: JSON.stringify({
        whatsapp_number: data.whatsapp_number,
        gstin: data.gstin,
        business_name: data.business_name,
        state: data.state,
        filing_type: data.filing_type,
      }),
    });

    // 3. Sync Default Reminder Settings
    const { error: remErr } = await supabase.from('reminder_settings').upsert({
      whatsapp_number: data.whatsapp_number,
      reminder_days: [1, 3, 7],
      reminder_time: '10:00:00',
      frequency: data.filing_type === 'monthly' ? 'monthly' : 'quarterly',
      is_active: true,
      next_reminder_date: data.next_reminder_date || null
    });
    if (remErr) throw new Error(`Reminder Config Error: ${remErr.message}`);

    revalidatePath('/admin');
    return { success: true };
  } catch (err: any) {
    console.error('adminCreateUser failed:', err.message);
    return { success: false, error: err.message || 'Internal Server Error' };
  }
}

/**
 * Delete a user and cascade to their settings
 */
export async function deleteUser(whatsapp: string) {
  try {
    const supabase = createServerClient();
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('whatsapp_number', whatsapp);

    if (error) throw error;
    revalidatePath('/admin');
    return { success: true };
  } catch (err: any) {
    console.error('Delete Error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Toggle user active status
 */
export async function toggleUserStatus(whatsapp: string, isActive: boolean) {
  try {
    const supabase = createServerClient();
    const { error } = await supabase
      .from('users')
      .update({ is_active: isActive })
      .eq('whatsapp_number', whatsapp);

    if (error) throw error;
    revalidatePath('/admin');
    return { success: true };
  } catch (err: any) {
    console.error('Toggle Status Error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Trigger manual WhatsApp reminder via Backend
 */
export async function sendManualReminder(whatsapp: string) {
  try {
    await backendFetch(`/api/admin/send-whatsapp?whatsapp_number=${encodeURIComponent(whatsapp)}`, {
      method: 'POST',
    });
    revalidatePath('/admin');
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

/**
 * Global Configuration Actions
 */
export async function getSystemConfig() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('system_settings')
    .select('*');
  
  if (error) return {};
  
  // Transform array to key-value object
  return data.reduce((acc: any, curr: any) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
}

export async function updateSystemConfig(settings: Record<string, string>) {
  const supabase = createServerClient();
  
  const updates = Object.entries(settings).map(([key, value]) => ({
    key,
    value,
    updated_at: new Date().toISOString()
  }));

  const { error } = await supabase
    .from('system_settings')
    .upsert(updates);

  if (error) {
    console.error('Config Error:', error);
    return { success: false, error: error.message };
  }
  
  revalidatePath('/admin');
  return { success: true };
}

// --- CLIENT ACTIONS ---

export async function upsertGSTDetails(details: Partial<GSTDetails>) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.phone) throw new Error('Not authenticated');

  return backendFetch('/api/gst/upsert', {
    method: 'POST',
    body: JSON.stringify({ ...details, whatsapp_number: user.phone }),
  });
}

export async function updateReminderSettings(settings: Partial<ReminderSettings>) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.phone) throw new Error('Not authenticated');

  return backendFetch('/api/reminders/update', {
    method: 'POST',
    body: JSON.stringify({ ...settings, whatsapp_number: user.phone }),
  });
}
