'use server';

import { createServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { GSTDetails, ReminderSettings } from '@/types';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:8000';

/* =========================================================
   INTERNAL BACKEND FETCH
========================================================= */

async function backendFetch(path: string, options: RequestInit = {}) {
  const response = await fetch(`${BACKEND_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(
      typeof err.detail === 'string'
        ? err.detail
        : JSON.stringify(err.detail || err)
    );
  }

  return response.json();
}

/* =========================================================
   ADMIN ACTIONS
========================================================= */

/**
 * Create / Update Client (ADMIN)
 */
export async function adminCreateUser(data: {
  whatsapp_number: string;
  full_name: string;
  email: string;
  gstin: string;
  business_name: string;
  state?: string;
  filing_type?: 'monthly' | 'qrmp';
  next_reminder_date?: string;
}) {
  const supabase = createServerClient();

  try {
    /* ---------------- USERS TABLE ---------------- */
    const { error: userErr } = await supabase.from('users').upsert(
      {
        phone: data.whatsapp_number,
        name: data.full_name,
        email: data.email,
        gstin: data.gstin,
      },
      { onConflict: 'phone' }
    );

    if (userErr) throw userErr;

    /* ---------------- GST + COMPLIANCE (FASTAPI) ---------------- */
    await backendFetch('/api/gst/upsert', {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        whatsapp_number: data.whatsapp_number,
        gstin: data.gstin,
        business_name: data.business_name,
        state: data.state,
        filing_type: data.filing_type,
      }),
    });

    /* ---------------- REMINDER SETTINGS ---------------- */
    const { error: reminderErr } = await supabase
      .from('reminder_settings')
      .upsert(
        {
          whatsapp_number: data.whatsapp_number,
          reminder_days: [1, 3, 7],
          reminder_time: '10:00',
          frequency:
            data.filing_type === 'qrmp' ? 'quarterly' : 'monthly',
          is_active: true,
          next_reminder_date: data.next_reminder_date || null,
        },
        { onConflict: 'whatsapp_number' }
      );

    if (reminderErr) throw reminderErr;

    revalidatePath('/admin');
    return { success: true };
  } catch (err: any) {
    console.error('adminCreateUser error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Fetch all users (Admin table) - Source from Compliance Table and join Users
 */
export async function getAllUsers() {
  const supabase = createServerClient();

  // 1. Fetch from compliance table
  const { data: complianceData, error: compError } = await supabase
    .from('compliance')
    .select('*');

  if (compError) {
    console.error('Compliance fetch error:', compError);
    // If compliance table fails, fall back to users table
    const { data: usersData, error: userError } = await supabase
      .from('users')
      .select('*, reminder_settings(*)');
    if (userError) throw userError;
    return (usersData || []).map((u: any) => ({
      ...u,
      whatsapp_number: u.phone,
      full_name: u.name,
      gst_details: null,
      reminder_settings: u.reminder_settings?.[0] || null,
    }));
  }

  // 2. Fetch basic user info to join
  const { data: usersData } = await supabase
    .from('users')
    .select('phone, name, email, gstin, is_active, reminder_settings(*)');

  // 3. Map together by GSTIN
  return (complianceData || []).map((comp: any) => {
    const user = usersData?.find((u: any) => u.gstin === comp.gstin);
    
    // Determine filing type from gtsr1 JSON frequency field
    const freq = comp.gtsr1?.frequency || 'M';
    
    return {
      whatsapp_number: user?.phone || 'N/A',
      full_name: user?.name || comp.legalname || 'Unnamed Client',
      email: user?.email || '',
      is_active: user?.is_active ?? true,
      gst_details: {
        ...comp,
        business_name: comp.legalname,
        filing_type: freq === 'Q' ? 'qrmp' : 'monthly',
      },
      reminder_settings: user?.reminder_settings?.[0] || null,
    };
  });
}

/**
 * Delete User
 */
export async function deleteUser(whatsapp: string) {
  const supabase = createServerClient();

  const { error } = await supabase
    .from('users')
    .delete()
    .eq('phone', whatsapp);

  if (error) return { success: false, error: error.message };

  revalidatePath('/admin');
  return { success: true };
}

/**
 * Toggle Active Status
 */
export async function toggleUserStatus(
  whatsapp: string,
  isActive: boolean
) {
  const supabase = createServerClient();

  const { error } = await supabase
    .from('users')
    .update({ is_active: isActive })
    .eq('phone', whatsapp);

  if (error) return { success: false, error: error.message };

  revalidatePath('/admin');
  return { success: true };
}

/**
 * Manual Reminder Trigger
 */
export async function sendManualReminder(whatsapp: string) {
  await backendFetch(
    `/api/admin/send-whatsapp?whatsapp_number=${encodeURIComponent(
      whatsapp
    )}`,
    { method: 'POST' }
  );

  revalidatePath('/admin');
  return { success: true };
}

/**
 * Global Configuration Actions
 */
export async function getSystemConfig(): Promise<Record<string, string>> {
  const supabase = createServerClient();

  const { data, error } = await supabase.from('system_settings').select('*');

  if (error) {
    console.error('getSystemConfig error:', error);
    return {};
  }

  return (data || []).reduce((acc: Record<string, string>, row: any) => {
    acc[row.key] = row.value;
    return acc;
  }, {});
}

export async function updateSystemConfig(settings: Record<string, string>) {
  const supabase = createServerClient();

  const updates = Object.entries(settings).map(([key, value]) => ({
    key,
    value,
    updated_at: new Date().toISOString(),
  }));

  const { error } = await supabase.from('system_settings').upsert(updates);

  if (error) {
    console.error('Config Error:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin');
  return { success: true };
}

/* =========================================================
   CLIENT ACTIONS
========================================================= */

export async function upsertGSTDetails(details: Partial<GSTDetails>) {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user?.email || !data.user?.phone) {
    throw new Error('Not authenticated');
  }

  return backendFetch('/api/gst/upsert', {
    method: 'POST',
    body: JSON.stringify({
      ...details,
      email: data.user.email,
      whatsapp_number: data.user.phone,
    }),
  });
}

export async function updateReminderSettings(
  settings: Partial<ReminderSettings>
) {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user?.phone) throw new Error('Not authenticated');

  return backendFetch('/api/reminders/update', {
    method: 'POST',
    body: JSON.stringify({
      ...settings,
      whatsapp_number: data.user.phone,
    }),
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
  const { data } = await supabase.auth.getUser();

  if (!data.user?.phone) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('users')
    .update({ name: fullName })
    .eq('phone', data.user.phone);

  if (error) throw error;

  revalidatePath('/dashboard');
}
