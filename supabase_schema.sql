-- ==========================================
-- ✨ GovernanceAI MASTER DATABASE SCHEMA
-- ==========================================
-- Instructions: 
-- 1. Open Supabase Dashboard -> SQL Editor
-- 2. Paste this entire script and run it
-- 3. This will set up Tables, RLS Policies, and Initial Data

-- 1. CORE TABLES
-- ------------------------------------------

CREATE TABLE IF NOT EXISTS users (
  whatsapp_number TEXT PRIMARY KEY,
  full_name TEXT,
  role TEXT DEFAULT 'client' CHECK (role IN ('admin', 'client')),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS gst_details (
  whatsapp_number TEXT PRIMARY KEY REFERENCES users(whatsapp_number) ON DELETE CASCADE,
  gstin TEXT UNIQUE NOT NULL,
  pan TEXT NOT NULL,
  business_name TEXT NOT NULL,
  state TEXT NOT NULL,
  filing_type TEXT NOT NULL CHECK (filing_type IN ('monthly', 'qrmp')),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS reminder_settings (
  whatsapp_number TEXT PRIMARY KEY REFERENCES users(whatsapp_number) ON DELETE CASCADE,
  reminder_days INTEGER[] DEFAULT '{1,3,7}',
  reminder_time TIME DEFAULT '10:00:00',
  frequency TEXT DEFAULT 'monthly' CHECK (frequency IN ('monthly', 'quarterly')),
  consent_given BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  next_reminder_date DATE
);

CREATE TABLE IF NOT EXISTS reminder_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  whatsapp_number TEXT REFERENCES users(whatsapp_number) ON DELETE CASCADE,
  gstin TEXT,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  status TEXT CHECK (status IN ('success', 'failed')),
  error_message TEXT
);

CREATE TABLE IF NOT EXISTS system_settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. SECURITY CONFIGURATION (RLS)
-- ------------------------------------------

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE gst_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminder_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminder_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;

-- 3. ACCESS POLICIES
-- ------------------------------------------

-- User Policies
DROP POLICY IF EXISTS "Users can view their own profile" ON users;
CREATE POLICY "Users can view their own profile" ON users FOR SELECT USING (auth.jwt() ->> 'phone' = whatsapp_number);

DROP POLICY IF EXISTS "Admins can view all profiles" ON users;
CREATE POLICY "Admins can view all profiles" ON users FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE whatsapp_number = (auth.jwt() ->> 'phone') AND role = 'admin')
);

-- GST Policies
DROP POLICY IF EXISTS "Users can manage their own GST details" ON gst_details;
CREATE POLICY "Users can manage their own GST details" ON gst_details FOR ALL USING (auth.jwt() ->> 'phone' = whatsapp_number);

DROP POLICY IF EXISTS "Admins can manage all GST details" ON gst_details;
CREATE POLICY "Admins can manage all GST details" ON gst_details FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE whatsapp_number = (auth.jwt() ->> 'phone') AND role = 'admin')
);

-- Settings Policies
DROP POLICY IF EXISTS "Users can manage their own settings" ON reminder_settings;
CREATE POLICY "Users can manage their own settings" ON reminder_settings FOR ALL USING (auth.jwt() ->> 'phone' = whatsapp_number);

DROP POLICY IF EXISTS "Admins can manage all settings" ON reminder_settings;
CREATE POLICY "Admins can manage all settings" ON reminder_settings FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE whatsapp_number = (auth.jwt() ->> 'phone') AND role = 'admin')
);

-- Log Policies
DROP POLICY IF EXISTS "Users can view their own logs" ON reminder_logs;
CREATE POLICY "Users can view their own logs" ON reminder_logs FOR SELECT USING (auth.jwt() ->> 'phone' = whatsapp_number);

DROP POLICY IF EXISTS "Admins can view all logs" ON reminder_logs;
CREATE POLICY "Admins can view all logs" ON reminder_logs FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE whatsapp_number = (auth.jwt() ->> 'phone') AND role = 'admin')
);

-- System Config Policies (Admin Only)
DROP POLICY IF EXISTS "Admins can manage system settings" ON system_settings;
CREATE POLICY "Admins can manage system settings" ON system_settings FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE whatsapp_number = (auth.jwt() ->> 'phone') AND role = 'admin')
);

-- 4. BOOTSTRAP DATA
-- ------------------------------------------

-- Insert Default Admin (Replace with your number if needed)
INSERT INTO users (whatsapp_number, full_name, role, is_active)
VALUES ('+919999999999', 'System Admin', 'admin', TRUE)
ON CONFLICT (whatsapp_number) DO NOTHING;

-- Initialize System Settings
INSERT INTO system_settings (key, value) VALUES 
('whatsapp_phone_id', ''),
('whatsapp_access_token', ''),
('default_reminder_time', '10:00'),
('auto_retry', 'true')
ON CONFLICT (key) DO NOTHING;
