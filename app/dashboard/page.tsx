import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { 
  ProfileSection, 
  GSTForm, 
  ReminderSection, 
  UpcomingReminder 
} from '@/components/Dashboard';
import { User, GSTDetails, ReminderSettings } from '@/types';

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch all related data
  // Adaptive query for mismatched schema
  const { data: userData } = await supabase
    .from('users')
    .select('*')
    .eq('phone', user.phone) // Changed from whatsapp_number to phone
    .single();

  const { data: gstData } = await supabase
    .from('gst_details')
    .select('*')
    .eq('whatsapp_number', user.phone)
    .single();

  const { data: reminderData } = await supabase
    .from('reminder_settings')
    .select('*')
    .eq('whatsapp_number', user.phone)
    .single();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h1 className="text-xl font-bold">Client Dashboard</h1>
          <div className="text-sm font-medium text-gray-500">{user.phone}</div>
        </header>

        <UpcomingReminder settings={reminderData} />

        <div className="grid grid-cols-1 gap-6">
          <ProfileSection user={userData ? {
             whatsapp_number: userData.phone || userData.whatsapp_number,
             full_name: userData.name || userData.full_name,
             role: userData.role || 'client',
             is_active: userData.is_active ?? true,
             created_at: userData.created_at
          } : {
            whatsapp_number: user.phone!,
            full_name: '',
            role: 'client',
            is_active: true,
            created_at: new Date().toISOString()
          }} />
          
          <GSTForm details={gstData} whatsapp={user.phone!} />
          
          <ReminderSection settings={reminderData} />
        </div>
      </div>
    </div>
  );
}
