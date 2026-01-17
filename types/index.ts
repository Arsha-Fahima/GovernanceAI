export type UserRole = 'admin' | 'client';

export interface User {
  whatsapp_number: string;
  full_name: string;
  email?: string;
  role: UserRole;
  is_active: boolean;
  created_at: string;
}

export interface GSTDetails {
  whatsapp_number: string;
  gstin: string;
  pan: string;
  business_name: string;
  trade_name?: string;
  state: string;
  filing_type: 'monthly' | 'qrmp';
  updated_at: string;
  
  // Compliance table fields
  legalname?: string;
  compcategory?: string;
  latestgstr1?: string;
  latestgstr3b?: string;
  gtsr1?: any;
  gtsr3b?: any;
}

export interface ReminderSettings {
  whatsapp_number: string;
  reminder_days: number[];
  reminder_time: string; // Time string (HH:MM)
  frequency: 'monthly' | 'quarterly';
  consent_given: boolean;
  is_active: boolean;
  next_reminder_date: string | null;
}

export interface ReminderLog {
  id: string;
  whatsapp_number: string;
  gstin: string;
  sent_at: string;
  status: 'success' | 'failed';
  error_message?: string;
}
