'use client';

import { useState } from 'react';
import { Card, Input, Button } from '@/components/UI';
import { User, GSTDetails, ReminderSettings } from '@/types';
import { updateProfile, upsertGSTDetails, updateReminderSettings } from '@/lib/actions';
import { UserCircle, Save, Bell, Clock } from 'lucide-react';
import { cn, INDIAN_STATES, validateGSTIN, extractPANFromGSTIN } from '@/utils';
import toast from 'react-hot-toast';

export const ProfileSection = ({ user }: { user: User }) => {
  const [fullName, setFullName] = useState(user.full_name || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateProfile(fullName);
      toast.success('Profile updated');
    } catch (err: any) {
      toast.error(err.message || 'Update failed');
    }
    setIsLoading(false);
  };

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <UserCircle className="text-primary" />
        <h2 className="text-lg font-semibold">Profile Section</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label="WhatsApp Number"
          value={user.whatsapp_number}
          readOnly
          className="bg-gray-50"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Status:</span>
          <span className={cn(
            "px-2 py-0.5 rounded text-xs font-medium",
            user.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          )}>
            {user.is_active ? "Active" : "Disabled"}
          </span>
        </div>
        <Button onClick={handleUpdate} isLoading={isLoading}>
          <Save size={16} /> Save Profile
        </Button>
      </div>
    </Card>
  );
};

import { cn, INDIAN_STATES, validateGSTIN, extractPANFromGSTIN } from '@/utils';
import { GSTDetails } from '@/types';
import { upsertGSTDetails } from '@/lib/actions';

export const GSTForm = ({ details, whatsapp }: { details?: GSTDetails, whatsapp: string }) => {
  const [form, setForm] = useState<Partial<GSTDetails>>(details || {
    gstin: '',
    pan: '',
    business_name: '',
    state: '',
    filing_type: 'monthly',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let updatedForm = { ...form, [name]: value };

    if (name === 'gstin') {
      const gstin = value.toUpperCase();
      updatedForm.gstin = gstin;
      if (gstin.length >= 12) {
        updatedForm.pan = extractPANFromGSTIN(gstin);
      }
    }

    setForm(updatedForm);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateGSTIN(form.gstin || '')) {
      toast.error('Invalid GSTIN format');
      return;
    }

    setIsLoading(true);
    try {
      await upsertGSTDetails(form);
      toast.success('GST details saved successfully');
    } catch (err: any) {
      toast.error(err.message || 'Error saving GST data');
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-6">GST Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="GSTIN"
            name="gstin"
            placeholder="22AAAAA0000A1Z5"
            value={form.gstin}
            onChange={handleChange}
            maxLength={15}
            required
          />
          <Input
            label="PAN (Auto-derived)"
            name="pan"
            value={form.pan}
            readOnly
            className="bg-gray-50"
          />
          <Input
            label="Business Name"
            name="business_name"
            placeholder="Enter legal business name"
            value={form.business_name}
            onChange={handleChange}
            required
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">State</label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              required
            >
              <option value="">Select State</option>
              {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Filing Type</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="filing_type"
                  value="monthly"
                  checked={form.filing_type === 'monthly'}
                  onChange={handleChange}
                />
                Monthly
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="filing_type"
                  value="qrmp"
                  checked={form.filing_type === 'qrmp'}
                  onChange={handleChange}
                />
                Quarterly (QRMP)
              </label>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button type="submit" className="w-full md:w-auto" isLoading={isLoading}>
          Update GST Details
        </Button>
      </form>
    </Card>
  );
};

import { ReminderSettings } from '@/types';
import { updateReminderSettings } from '@/lib/actions';
import { Bell, Clock } from 'lucide-react';

export const ReminderSection = ({ settings }: { settings?: ReminderSettings }) => {
  const [form, setForm] = useState<Partial<ReminderSettings>>(settings || {
    reminder_days: [1, 3, 7],
    reminder_time: '10:00',
    frequency: 'monthly',
    consent_given: false,
    is_active: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const toggleDay = (day: number) => {
    const current = form.reminder_days || [];
    const updated = current.includes(day)
      ? current.filter(d => d !== day)
      : [...current, day].sort((a, b) => a - b);
    setForm({ ...form, reminder_days: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent_given) {
      toast.error("WhatsApp consent is required for automated reminders");
      return;
    }
    setIsLoading(true);
    try {
      await updateReminderSettings(form);
      toast.success('Reminder roadmap updated');
    } catch (err: any) {
      toast.error('Failed to update settings');
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <div className="flex items-center gap-2 mb-6">
        <Bell className="text-primary" />
        <h2 className="text-lg font-semibold">Reminder Settings (WhatsApp ONLY)</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-700 block">Reminder Days (Select multi)</label>
          <div className="flex flex-wrap gap-2">
            {[1, 3, 5, 7, 10, 15].map(day => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium border transition-all",
                  form.reminder_days?.includes(day)
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-300 hover:border-primary"
                )}
              >
                {day} Days Before
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Reminder Time (IST)</label>
            <div className="relative">
               <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <input
                type="time"
                value={form.reminder_time}
                onChange={(e) => setForm({ ...form, reminder_time: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
               />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Frequency</label>
            <select
              value={form.frequency}
              onChange={(e) => setForm({ ...form, frequency: e.target.value as any })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>
          </div>
        </div>

        <div className="space-y-3 p-4 bg-gray-50 rounded-md">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent_given}
              onChange={(e) => setForm({ ...form, consent_given: e.target.checked })}
              className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
            />
            <span className="text-sm text-gray-700">I explicitly consent to receive GST reminders on my WhatsApp number.</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
              className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
            />
            <span className="text-sm text-gray-700">Enable Reminders</span>
          </label>
        </div>

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Save Settings
        </Button>
      </form>
    </Card>
  );
};

export const UpcomingReminder = ({ settings }: { settings?: ReminderSettings }) => {
  return (
    <Card className="bg-blue-50 border-blue-100">
       <h2 className="text-lg font-semibold text-blue-900 mb-2">Upcoming Reminder</h2>
       <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-blue-600 uppercase font-semibold">Next Date</p>
            <p className="text-xl font-bold text-blue-900">{settings?.next_reminder_date || 'Not scheduled'}</p>
          </div>
          <div>
            <p className="text-xs text-blue-600 uppercase font-semibold">Status</p>
            <p className={cn(
                "text-xl font-bold",
                settings?.is_active ? "text-green-600" : "text-gray-500"
            )}>
                {settings?.is_active ? "Active" : "Paused"}
            </p>
          </div>
       </div>
    </Card>
  );
}
