import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { UserManagementTable, AdminLogs, StatsCards, AdminSettings, BrandLogo } from '@/components/Admin';
import { User, GSTDetails, ReminderSettings, ReminderLog } from '@/types';
import { getSystemConfig, getAllUsers } from '@/lib/actions';
import { LayoutDashboard, Users as UsersIcon, Settings, LogOut, Menu, X } from 'lucide-react';
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
  const users = await getAllUsers();

  // Fetch logs
  const { data: logsData } = await supabase
    .from('reminder_logs')
    .select('*')
    .order('sent_at', { ascending: false })
    .limit(10);

  const config = await getSystemConfig();

  const stats = {
    total: users.length,
    monthly: users.filter(u => u.gst_details?.filing_type === 'monthly').length,
    qrmp: users.filter(u => u.gst_details?.filing_type === 'qrmp').length,
    active: users.filter(u => u.is_active).length,
  };

  const navItems = [
    { label: 'Dashboard', view: 'overview', icon: LayoutDashboard },
    { label: 'Clients', view: 'clients', icon: UsersIcon },
    { label: 'Control Panel', view: 'preferences', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-40">
        <BrandLogo />
        <div className="flex items-center gap-2">
           {navItems.map(item => (
             <Link 
               key={item.view}
               href={`/admin?view=${item.view}`}
               className={cn(
                 "p-2 rounded-lg transition-colors",
                 activeView === item.view ? "bg-blue-50 text-blue-600" : "text-gray-400"
               )}
             >
               <item.icon size={20} />
             </Link>
           ))}
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-gray-100 bg-gray-50/20">
          <BrandLogo />
        </div>
        
        <div className="p-4 flex-1">
          <nav className="space-y-1">
            {navItems.map(item => (
              <Link 
                key={item.view}
                href={`/admin?view=${item.view}`} 
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors",
                  activeView === item.view ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon size={18} /> {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-gray-100">
           <button className="flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 w-full rounded-lg font-medium transition-colors">
             <LogOut size={18} /> Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6 sm:space-y-8">
          <header className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-8">
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                {activeView === 'preferences' ? 'Control Panel' : 
                 activeView === 'clients' ? 'Clients Overview' : 'Dashboard Overview'}
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm font-semibold">
                {activeView === 'overview' && `Currently tracking ${stats.total} entities`}
                {activeView === 'clients' && `Directory of ${stats.total} registered GST entities`}
                {activeView === 'preferences' && "System triggers & WhatsApp configuration"}
              </p>
            </div>
            
          </header>

          {activeView === 'overview' && (
            <div className="space-y-6 sm:space-y-8">
              <StatsCards {...stats} />
              <div className="grid grid-cols-1">
                <AdminLogs logs={logsData || []} />
              </div>
            </div>
          )}

          {activeView === 'clients' && <UserManagementTable users={users} />}
          {activeView === 'preferences' && <AdminSettings initialConfig={config} />}
        </div>
      </main>
    </div>
  );
}
