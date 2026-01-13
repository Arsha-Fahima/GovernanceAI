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
    console.error("Backend Fetch Error:", err); // Log the real error
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
    .select('*, gst_details(*), reminder_settings(*)') // Note: gst_details might fail if table missing
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to load users');
  }

  // Map DB columns to Frontend Interfaces
  return (data || []).map((u: any) => {
    const businessName = u.gst_details?.[0]?.business_name || u.gst_details?.business_name;
    return {
      ...u,
      whatsapp_number: u.phone || u.whatsapp_number || '',
      full_name: u.name || u.full_name || businessName || 'Unnamed Client',
      role: u.role || 'client',
      is_active: u.is_active ?? true,
      // Ensure nested relations are preserved
      gst_details: u.gst_details?.[0] || u.gst_details,
      reminder_settings: u.reminder_settings?.[0] || u.reminder_settings
    };
  });
}

/**
 * Create or Update a full client profile (Admin side)
 */
export async function adminCreateUser(data: {
  whatsapp_number: string;
  full_name: string;
  email: string;
  gstin: string;
  business_name: string;
  state: string;
  filing_type: 'monthly' | 'qrmp';
  next_reminder_date?: string;
}) {
  const supabase = createServerClient();

  try {
    // 1. Sync User Profile
    // ADAPTATION: Mapping frontend fields to existing database schema (phone, name)
    const { error: userErr } = await supabase.from('users').upsert({
      phone: data.whatsapp_number,
      name: data.full_name,
      email: data.email,
      gstin: data.gstin,
      // role: 'client', // Column likely missing in DB
      // is_active: true // Column likely missing in DB
    });
    if (userErr) throw new Error(`User Sync Error: ${userErr.message}`);

    // Extract PAN from GSTIN (chars 2-12)
    const pan = data.gstin.substring(2, 12);

    // 2. Sync GST Details via Python Backend (Business logic for PAN extraction)
    await backendFetch('/api/gst/upsert', {
      method: 'POST',
      body: JSON.stringify({
        whatsapp_number: data.whatsapp_number,
        gstin: data.gstin,
        pan: pan,
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
      .eq('phone', whatsapp);

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
      .eq('phone', whatsapp);

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

export async function fetchGSTDetails(gstin: string) {
  return backendFetch('/api/fetch-gst-details', {
    method: 'POST',
    body: JSON.stringify({ gstin }),
  });
}

export async function updateProfile(fullName: string) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.phone) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('users')
    .update({ full_name: fullName })
    .eq('whatsapp_number', user.phone);

  if (error) throw new Error(error.message);
  revalidatePath('/dashboard');
}

