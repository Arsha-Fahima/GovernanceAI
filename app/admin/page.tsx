import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { UserManagementTable, AdminLogs, StatsCards, AdminSettings, BrandLogo } from '@/components/Admin';
import { User, GSTDetails, ReminderSettings, ReminderLog } from '@/types';
import { getSystemConfig } from '@/lib/actions';
import { LayoutDashboard, Users as UsersIcon, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils';

export default async function AdminPage({ 
  searchParams 
}: { 
  searchParams: { view?: string } 
}) {
  const activeView = searchParams.view || 'overview';
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Redirect to login only if specifically required later. 
  // For now, allowing direct access to Admin Dashboard UI.
  /*
  if (!user) {
    redirect('/login');
  }
  */

  // Fetch all users with nested data
  const { data: usersData } = await supabase
    .from('users')
    .select('*, gst_details(*), reminder_settings(*)')
    .order('created_at', { ascending: false });

  // Fetch logs
  const { data: logsData } = await supabase
    .from('reminder_logs')
    .select('*')
    .order('sent_at', { ascending: false })
    .limit(10);

  const config = await getSystemConfig();

  const users = usersData || [];
  const stats = {
    total: users.length,
    monthly: users.filter(u => u.gst_details?.filing_type === 'monthly').length,
    qrmp: users.filter(u => u.gst_details?.filing_type === 'qrmp').length,
    active: users.filter(u => u.is_active).length,
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-gray-100 bg-gray-50/20">
          <BrandLogo />
        </div>
        
        <div className="p-4 flex-1">
          <nav className="space-y-1">
            <Link 
              href="/admin?view=overview" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors",
                activeView === 'overview' ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link 
              href="/admin?view=clients" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors",
                activeView === 'clients' ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <UsersIcon size={18} /> Clients
            </Link>
            <Link 
              href="/admin?view=preferences" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors",
                activeView === 'preferences' ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Settings size={18} /> Control Panel
            </Link>
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-gray-100">
           <button className="flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 w-full rounded-lg font-medium transition-colors">
             <LogOut size={18} /> Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
          <header className="flex justify-between items-center pb-2">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight capitalize">
                {activeView === 'preferences' ? 'Control Panel' : `${activeView} Overview`}
              </h1>
              <p className="text-gray-500 text-sm font-medium">
                {activeView === 'overview' && `Currently tracking ${stats.total} active client accounts`}
                {activeView === 'clients' && `Directory of ${stats.total} registered GST entities`}
                {activeView === 'preferences' && "Configure system triggers and WhatsApp API credentials"}
              </p>
            </div>
            <div className="flex gap-2">
              <div className="hidden sm:flex flex-col items-end pr-4 border-r border-gray-200">
                <span className="text-[10px] font-bold text-gray-400 uppercase">System Status</span>
                <span className="text-sm font-bold text-green-600 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Operational
                </span>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full border border-gray-200" />
            </div>
          </header>

          {activeView === 'overview' && (
            <>
              <StatsCards {...stats} />
              <div className="grid grid-cols-1">
                <div>
                  <AdminLogs logs={logsData || []} />
                </div>
              </div>
            </>
          )}

          {activeView === 'clients' && (
            <div className="space-y-4">
               <UserManagementTable users={users} />
            </div>
          )}

          {activeView === 'preferences' && (
            <AdminSettings initialConfig={config} />
          )}
        </div>
      </main>
    </div>
  );
}
