'use client';

import { useState, useEffect } from 'react';
import { Card, Input, Button } from '@/components/UI';
import { User, GSTDetails, ReminderSettings, ReminderLog } from '@/types';
import toast from 'react-hot-toast';
import { 
  toggleUserStatus, 
  deleteUser, 
  sendManualReminder,
  adminCreateUser,
  updateSystemConfig,
  fetchGSTDetails
} from '@/lib/actions';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Send, 
  Edit2, 
  Trash2, 
  ShieldCheck, 
  ShieldAlert,
  History,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  X,
  Building2,
  MapPin
} from 'lucide-react';
import { cn, INDIAN_STATES, validateGSTIN, getStateFromGSTIN } from '@/utils';
import { COUNTRY_CODES } from '@/utils/countryCodes';

export const BrandLogo = () => {
    return (
        <div className="flex items-center gap-3 py-2 px-1">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm border border-gray-100 ring-4 ring-gray-50/50">
                <ShieldCheck className="text-blue-600 w-full h-full" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
                <h1 className="text-base font-black text-gray-900 leading-none tracking-tight">GovernanceAI</h1>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1 opacity-80">Admin Hub</p>
            </div>
        </div>
    );
};

interface ExtendedUser extends User {
  gst_details: GSTDetails | null;
  reminder_settings: ReminderSettings | null;
}

export const AddUserModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [complianceSummary, setComplianceSummary] = useState<any>(null);
  const [form, setForm] = useState({
    country_code: '+91',
    whatsapp_number: '',
    full_name: '',
    email: '',
    gstin: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!validateGSTIN(form.gstin)) throw new Error('Invalid GSTIN format');
      if (!form.whatsapp_number) throw new Error('WhatsApp Number is required');

      const result = await adminCreateUser({ ...form, whatsapp_number: `${form.country_code}${form.whatsapp_number}` });
      
      if (result.success) {
        toast.success('Client added successfully');
        onClose();
      } else {
        toast.error(result.error || 'Failed to create user');
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFetch = async () => {
    if (!form.gstin) {
      toast.error('Please enter a GSTIN first');
      return; 
    }
    setLoading(true);
    setComplianceSummary(null);
    try {
        const data = await fetchGSTDetails(form.gstin);
        if (data) {
          const report = data.compliance_report;
          setForm(prev => ({
              ...prev,
              full_name: data.lgnm || data.tradeNam || prev.full_name || '',
          }));
          if (report) {
             setComplianceSummary(report);
          }
          toast.success("Details fetched from API");
        }
    } catch(err: any) {
        toast.error(err.message || 'Failed to fetch details');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white p-0 overflow-hidden shadow-2xl border-none">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-xl font-bold text-gray-900">Add New Client</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-row gap-2 items-end sm:col-span-1">
              <div className="w-[100px] flex flex-col">
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Country</label>
                <select
                  className="w-full px-2 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500/20 text-sm"
                  value={form.country_code}
                  onChange={e => setForm({ ...form, country_code: e.target.value })}
                  required
                >
                  {COUNTRY_CODES.map(c => (
                    <option key={c.code} value={c.code}>{c.code} ({c.name})</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <Input 
                  label="WhatsApp Number" 
                  placeholder="9999999999" 
                  required 
                  value={form.whatsapp_number}
                  onChange={e => setForm({...form, whatsapp_number: e.target.value})}
                />
              </div>
            </div>
            <Input 
              label="Full Name" 
              placeholder="John Doe" 
              required 
              value={form.full_name}
              onChange={e => setForm({...form, full_name: e.target.value})}
            />
            <Input 
              label="Email Address" 
              type="email"
              placeholder="client@company.com" 
              required 
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
            />
            <div className="flex flex-row gap-2 items-end">
              <div className="flex-grow">
                <Input 
                  label="GSTIN" 
                  placeholder="22AAAAA0000A1Z5" 
                  required 
                  value={form.gstin}
                  onChange={e => {
                      const val = e.target.value.toUpperCase();
                      setForm({
                          ...form, 
                          gstin: val
                      });
                  }}
                />
              </div>
              <Button type="button" onClick={handleFetch} variant="outline" className="mb-[2px] h-[38px] px-3">
                Fetch
              </Button>
            </div>

          </div>

          {complianceSummary && (
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm">
                <div className="flex justify-between items-start mb-3 border-b border-gray-200 pb-2">
                    <div>
                        <p><span className="font-semibold">Legal Name:</span> {complianceSummary.legalname}</p>
                        <p><span className="font-semibold">GSTIN:</span> {complianceSummary.gstin}</p>
                        <p><span className="font-semibold">Category:</span> {complianceSummary.compcategory}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* GSTR-1 */}
                    <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-bold text-blue-700">GSTR-1</h4>
                            <span className={cn(
                                "text-[10px] px-1.5 py-0.5 rounded font-medium",
                                complianceSummary.gtsr1.status === 'FILED' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            )}>
                                {complianceSummary.gtsr1.status}
                            </span>
                        </div>
                        <div className="space-y-1 text-xs text-gray-600">
                             <div className="flex justify-between"><span>Frequency:</span> <span className="font-medium text-gray-900">{complianceSummary.gtsr1.frequency}</span></div>
                             <div className="flex justify-between"><span>Latest Filed:</span> <span className="font-medium text-gray-900">{complianceSummary.latestgstr1}</span></div>
                             <div className="flex justify-between"><span>Pending:</span> <span className="font-medium text-gray-900">{complianceSummary.gtsr1.pending_count}</span></div>
                             <div className="flex justify-between"><span>Next Due:</span> <span className="font-medium text-gray-900">{complianceSummary.gtsr1.due_date || 'N/A'}</span></div>
                        </div>
                    </div>

                    {/* GSTR-3B */}
                    <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-bold text-purple-700">GSTR-3B</h4>
                            <span className={cn(
                                "text-[10px] px-1.5 py-0.5 rounded font-medium",
                                complianceSummary.gtsr3b.status === 'FILED' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            )}>
                                {complianceSummary.gtsr3b.status}
                            </span>
                        </div>
                        <div className="space-y-1 text-xs text-gray-600">
                             <div className="flex justify-between"><span>Frequency:</span> <span className="font-medium text-gray-900">{complianceSummary.gtsr3b.frequency}</span></div>
                             <div className="flex justify-between"><span>Latest Filed:</span> <span className="font-medium text-gray-900">{complianceSummary.latestgstr3b}</span></div>
                             <div className="flex justify-between"><span>Pending:</span> <span className="font-medium text-gray-900">{complianceSummary.gtsr3b.pending_count}</span></div>
                             <div className="flex justify-between"><span>Next Due:</span> <span className="font-medium text-gray-900">{complianceSummary.gtsr3b.due_date || 'N/A'}</span></div>
                        </div>
                    </div>
                </div>
            </div>
          )}
          
          <div className="pt-4 flex gap-3">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="flex-1" isLoading={loading}>Create User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export const StatsCards = ({ total, monthly, qrmp, active }: { total: number, monthly: number, qrmp: number, active: number }) => {
  const stats = [
    { label: 'Total Entities', value: total, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50/50' },
    { label: 'Monthly Taxpayers', value: monthly, icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-50/50' },
    { label: 'QRMP Regulars', value: qrmp, icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50/50' },
    { label: 'Active Reminders', value: active, icon: ShieldCheck, color: 'text-orange-600', bg: 'bg-orange-50/50' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4 sm:p-5 flex items-center justify-between border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all border group">
          <div className="flex flex-col gap-1">
            <p className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter">{stat.value}</p>
          </div>
          <div className={cn("p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-transform group-hover:scale-110", stat.bg)}>
            <stat.icon size={20} className={stat.color} strokeWidth={2.5} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export const EditUserModal = ({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: ExtendedUser | null }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [complianceSummary, setComplianceSummary] = useState<any>(null);
  const [form, setForm] = useState({
    full_name: '',
    gstin: '',
  });

  useEffect(() => {
    if (user) {
      setForm({
        full_name: user.full_name || '',
        gstin: user.gst_details?.gstin || '',
      });
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Re-using adminCreateUser for simple upsert logic
      const result = await adminCreateUser({ ...form, whatsapp_number: user.whatsapp_number });
      if (result.success) {
        toast.success('Client updated successfully');
        onClose();
      } else {
        toast.error(result.error || 'Failed to update user');
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white p-0 overflow-hidden shadow-2xl border-none">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-xl font-bold text-gray-900">Edit Client: {user.whatsapp_number}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input 
              label="Full Name" 
              value={form.full_name}
              onChange={e => setForm({...form, full_name: e.target.value})}
            />
            <Input 
              label="GSTIN" 
              value={form.gstin}
              onChange={e => {
                  const val = e.target.value.toUpperCase();
                  setForm({
                      ...form, 
                      gstin: val
                  });
              }}
            />

          </div>
          <div className="pt-4 flex gap-3">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="flex-1" isLoading={loading}>Save Changes</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export const UserDetailModal = ({ isOpen, onClose, user, onSendManual }: { isOpen: boolean, onClose: () => void, user: ExtendedUser | null, onSendManual: (whatsapp: string) => void }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <Card className="w-full max-w-2xl bg-white p-0 overflow-hidden shadow-2xl border-none h-[90vh] sm:h-[80vh] flex flex-col">
        <div className="p-4 sm:p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{user.full_name}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{user.whatsapp_number}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors ml-4 focus:outline-none">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8 no-scrollbar">
          {/* Details Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Building2 size={14} /> Legal Information
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex flex-col gap-3">
                        <div>
                            <label className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Legal Name</label>
                            <p className="text-sm font-black text-gray-900 leading-tight">{user.gst_details?.legalname || user.full_name || '—'}</p>
                        </div>

                        <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm">
                            <div>
                                <label className="text-[9px] text-gray-400 font-bold uppercase">gstin</label>
                                <p className="text-sm font-mono font-black text-blue-600 tracking-tight">{user.gst_details?.gstin || '—'}</p>
                            </div>
                            <div className="text-right">
                                <label className="text-[9px] text-gray-400 font-bold uppercase block">Category</label>
                                <span className="text-[9px] font-black bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase border border-blue-100">
                                    {user.gst_details?.compcategory || 'GST'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-indigo-50/30 rounded-2xl border border-indigo-100/50 space-y-3">
                    <h5 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Contact Details</h5>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-indigo-100 flex items-center justify-center text-indigo-500">
                                <Send size={14} />
                            </div>
                            <div>
                                <label className="text-[8px] text-gray-400 font-bold uppercase block">WhatsApp</label>
                                <p className="text-xs font-bold text-gray-800">{user.whatsapp_number}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-indigo-100 flex items-center justify-center text-indigo-500">
                                <Search size={14} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <label className="text-[8px] text-gray-400 font-bold uppercase block">Email Address</label>
                                <p className="text-xs font-bold text-gray-800 truncate" title={user.email}>{user.email || 'No email provided'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-3 bg-emerald-50/30 rounded-2xl border border-emerald-100/50 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest">Reminders</p>
                        <p className="text-xs font-black text-emerald-700 capitalize">{user.is_active ? '✅ Enabled' : '❌ Disabled'}</p>
                    </div>
                    <div className={cn("w-2 h-2 rounded-full", user.is_active ? "bg-emerald-500 animate-pulse" : "bg-red-400")} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <History size={14} /> Filing History
              </h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-wider">GSTR-1 Details</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-blue-100 text-blue-700 font-bold">
                      {user.gst_details?.gtsr1?.frequency || 'M'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase">Latest Filed</p>
                    <p className="text-xs sm:text-sm font-black text-gray-800">{user.gst_details?.latestgstr1 || '—'}</p>
                  </div>
                  <div className="mt-2.5">
                    <p className="text-[9px] font-black text-blue-400 uppercase mb-2 tracking-widest">Filing Health (Last 4)</p>
                    <div className="flex gap-2">
                        {[...Array(4)].map((_, i) => {
                            // Get last 4 returns (RapidAPI returns are usually oldest first)
                            const returns = user.gst_details?.gtsr1?.returns || [];
                            const ret = returns[returns.length - 1 - i];
                            
                            return (
                                <div key={i} className="flex-1 group relative">
                                    <div className={cn(
                                        "h-1.5 rounded-full transition-all duration-300",
                                        ret ? (ret.dof ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-red-400") : "bg-gray-200"
                                    )} />
                                    {ret && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                                            {ret.taxp || ret.period} ({ret.fy}): FILED
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] sm:text-[10px] font-black text-purple-600 uppercase tracking-wider">GSTR-3B Details</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-purple-100 text-purple-700 font-bold">
                      {user.gst_details?.gtsr3b?.frequency || 'M'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase">Latest Filed</p>
                    <p className="text-xs sm:text-sm font-black text-gray-800">{user.gst_details?.latestgstr3b || '—'}</p>
                  </div>
                  <div className="mt-2.5">
                    <p className="text-[9px] font-black text-purple-400 uppercase mb-2 tracking-widest">Filing Health (Last 4)</p>
                    <div className="flex gap-2">
                        {[...Array(4)].map((_, i) => {
                            // Get last 4 returns (RapidAPI returns are usually oldest first)
                            const returns = user.gst_details?.gtsr3b?.returns || [];
                            const ret = returns[returns.length - 1 - i];
                            
                            return (
                                <div key={i} className="flex-1 group relative">
                                    <div className={cn(
                                        "h-1.5 rounded-full transition-all duration-300",
                                        ret ? (ret.dof ? "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" : "bg-red-400") : "bg-gray-100"
                                    )} />
                                    {ret && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                                            {ret.taxp || ret.period} ({ret.fy}): FILED
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-3">
           <Button className="flex-1 order-2 sm:order-1" variant="outline" onClick={() => {
             onClose();
             // Logic to trigger edit from here could be added
           }}>
             <Edit2 size={16} /> Edit Settings
           </Button>
           <Button className="flex-1 order-1 sm:order-2" onClick={() => onSendManual(user.whatsapp_number)}>
             <Send size={16} /> Send Now
           </Button>
        </div>
      </Card>
    </div>
  );
};

const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message, confirmText = 'Confirm', variant = 'danger' }: any) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <Card className="w-full max-w-sm bg-white p-6 shadow-2xl border-none">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-6">{message}</p>
                <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
                    <Button 
                        className={cn("flex-1", variant === 'danger' ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700")} 
                        onClick={() => { onConfirm(); onClose(); }}
                    >
                        {confirmText}
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export const UserManagementTable = ({ users }: { users: ExtendedUser[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<ExtendedUser | null>(null);
  const [selectedUser, setSelectedUser] = useState<ExtendedUser | null>(null);
  const [confirmConfig, setConfirmConfig] = useState<{ isOpen: boolean, title: string, message: string, onConfirm: () => void, variant: 'danger' | 'primary' }>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
    variant: 'danger'
  });

  const filteredUsers = users.filter(u => {
    const matchesSearch = 
        (u.whatsapp_number || '').includes(searchTerm) || 
        u.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.gst_details?.gstin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.gst_details?.business_name?.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'monthly') return matchesSearch && u.gst_details?.filing_type === 'monthly';
    if (filterType === 'qrmp') return matchesSearch && u.gst_details?.filing_type === 'qrmp';
    if (filterType === 'disabled') return matchesSearch && !u.is_active;
    
    return matchesSearch;
  });

  const handleManualSend = async (whatsapp: string) => {
    setConfirmConfig({
        isOpen: true,
        title: 'Send Reminder?',
        message: `This will trigger a manual GST reminder message to ${whatsapp} via WhatsApp.`,
        variant: 'primary',
        onConfirm: async () => {
            const result = await sendManualReminder(whatsapp);
            if (result.success) {
                toast.success('Reminder sent successfully');
            } else {
                toast.error(result.error || 'Failed to send reminder');
            }
        }
    });
  };

  const handleDelete = async (whatsapp: string) => {
    setConfirmConfig({
        isOpen: true,
        title: 'Delete Client?',
        message: `Are you sure you want to delete ${whatsapp}? All GST details and reminder history will be permanently removed.`,
        variant: 'danger',
        onConfirm: async () => {
             const result = await deleteUser(whatsapp);
             if (result.success) {
                toast.success('Client deleted');
             } else {
                toast.error(result.error || 'Failed to delete');
             }
        }
    });
  }

  const handleToggle = async (whatsapp: string, currentStatus: boolean) => {
    const result = await toggleUserStatus(whatsapp, !currentStatus);
    if (result.success) {
        toast.success(currentStatus ? 'Reminders paused' : 'Reminders activated');
    } else {
        toast.error('Failed to update status');
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <ConfirmDialog 
        {...confirmConfig} 
        onClose={() => setConfirmConfig(prev => ({ ...prev, isOpen: false }))} 
      />
      <AddUserModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <EditUserModal 
        isOpen={!!editingUser} 
        onClose={() => setEditingUser(null)} 
        user={editingUser} 
      />
      <UserDetailModal 
        isOpen={!!selectedUser} 
        onClose={() => setSelectedUser(null)} 
        user={selectedUser} 
        onSendManual={handleManualSend}
      />
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-1">
          <div className="relative flex-1 lg:w-96 group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search by legal name, GSTIN or phone..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all text-sm shadow-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all shadow-sm cursor-pointer appearance-none sm:min-w-[140px]"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">⚡ All Filers</option>
            <option value="monthly">📅 Monthly</option>
            <option value="qrmp">📊 QRMP</option>
            <option value="disabled">🚫 Inactive</option>
          </select>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="w-full lg:w-auto rounded-xl py-2.5 px-6 flex gap-2 font-bold shadow-blue-100 shadow-lg justify-center">
          <Plus size={18} strokeWidth={3} /> Add New Client
        </Button>
      </div>

      <Card className="p-0 border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 text-gray-400 text-[10px] uppercase font-bold border-b border-gray-100">
                <th className="px-6 py-4 w-[30%]">Legal Name</th>
                <th className="px-6 py-4 w-[18%]">GSTIN / Category</th>
                <th className="px-6 py-4 w-[16%]">GSTR1 (JSONB)</th>
                <th className="px-6 py-4 w-[16%]">GSTR3B (JSONB)</th>
                <th className="px-6 py-4 w-[10%] text-center">Status</th>
                <th className="px-6 py-4 w-[10%] text-right font-medium tracking-[0.1em]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredUsers.map((user) => (
                <tr 
                  key={user.whatsapp_number} 
                  className="hover:bg-blue-50/20 transition-all group cursor-pointer"
                >
                  <td className="px-6 py-5" onClick={() => setSelectedUser(user)}>
                    <div className="font-bold text-gray-800 text-[13px] leading-snug">{user.gst_details?.legalname || user.full_name || 'Unnamed Client'}</div>
                    <div className="text-[10px] text-gray-400 font-mono mt-0.5 tracking-tighter">{user.whatsapp_number}</div>
                  </td>
                  <td className="px-6 py-5" onClick={() => setSelectedUser(user)}>
                    <div className="text-[12px] font-mono font-bold text-gray-700 tracking-tight">{user.gst_details?.gstin || '—'}</div>
                    <div className="mt-1">
                      <span className="text-[8px] font-black bg-white text-blue-500 px-1.5 py-0.5 rounded uppercase border border-blue-100 shadow-sm uppercase tracking-tighter">
                        {user.gst_details?.compcategory || 'GST'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5" onClick={() => setSelectedUser(user)}>
                    {user.gst_details?.gtsr1 ? (
                      <div className="flex flex-col gap-1.5 min-w-[100px]">
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-bold text-gray-400 bg-gray-50/50 w-8 px-1 py-0.5 rounded text-center">DUE</span>
                            <span className="text-[10px] font-mono font-black text-gray-700">{user.gst_details.gtsr1.due_day || '—'}th</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-bold text-gray-400 bg-gray-50/50 w-8 px-1 py-0.5 rounded text-center">FREQ</span>
                            <span className="text-[10px] font-mono font-black text-blue-600">{user.gst_details.gtsr1.frequency || 'M'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-bold text-gray-400 bg-gray-50/50 w-8 px-1 py-0.5 rounded text-center">RET</span>
                            <span className="text-[10px] font-mono font-black text-emerald-600">{user.gst_details.gtsr1.returns?.length || 0}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-2"><span className="text-[10px] text-gray-300 italic uppercase font-bold tracking-tighter">No JSON Info</span></div>
                    )}
                  </td>
                  <td className="px-6 py-5" onClick={() => setSelectedUser(user)}>
                    {user.gst_details?.gtsr3b ? (
                      <div className="flex flex-col gap-1.5 min-w-[100px]">
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-bold text-gray-400 bg-gray-50/50 w-8 px-1 py-0.5 rounded text-center">DUE</span>
                            <span className="text-[10px] font-mono font-black text-gray-700">{user.gst_details.gtsr3b.due_day || '—'}th</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-bold text-gray-400 bg-gray-50/50 w-8 px-1 py-0.5 rounded text-center">FREQ</span>
                            <span className="text-[10px] font-mono font-black text-purple-600">{user.gst_details.gtsr3b.frequency || 'M'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-bold text-gray-400 bg-gray-50/50 w-8 px-1 py-0.5 rounded text-center">RET</span>
                            <span className="text-[10px] font-mono font-black text-emerald-600">{user.gst_details.gtsr3b.returns?.length || 0}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-2"><span className="text-[10px] text-gray-300 italic uppercase font-bold tracking-tighter">No JSON Info</span></div>
                    )}
                  </td>
                  <td className="px-6 py-5" onClick={() => setSelectedUser(user)}>
                    <div className="flex items-center justify-center gap-2">
                      <div className={cn("w-2 h-2 rounded-full", user.is_active ? "bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-red-400")} />
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest",
                        user.is_active ? "text-green-600" : "text-red-500"
                      )}>
                        {user.is_active ? "Live" : "Inactive"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1.5 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200">
                      <button 
                           onClick={(e) => { e.stopPropagation(); handleManualSend(user.whatsapp_number); }}
                           className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-all" 
                           title="Send Reminder"
                      >
                        <Send size={14} />
                      </button>
                      <button 
                           onClick={(e) => { e.stopPropagation(); setEditingUser(user); }}
                           className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all" 
                           title="Edit"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button 
                          onClick={(e) => { e.stopPropagation(); handleToggle(user.whatsapp_number, user.is_active); }}
                          className={cn("p-1.5 rounded-lg transition-all", user.is_active ? "text-amber-500 hover:bg-amber-50" : "text-green-500 hover:bg-green-50")}
                      >
                        {user.is_active ? <ShieldAlert size={14} /> : <ShieldCheck size={14} />}
                      </button>
                      <button 
                          onClick={(e) => { e.stopPropagation(); handleDelete(user.whatsapp_number); }}
                          className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredUsers.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center gap-2">
            <AlertCircle size={40} className="text-gray-200" />
            <p className="text-gray-400 text-sm font-medium">No records matching your search</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export const AdminLogs = ({ logs }: { logs: ReminderLog[] }) => {
    return (
        <Card className="border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] p-0 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <History className="text-gray-400" size={18} />
                    <h2 className="text-sm font-bold text-gray-900">Recent Activity</h2>
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Live Logs</span>
            </div>
            <div className="divide-y divide-gray-50">
                {logs.map(log => (
                    <div key={log.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-2 h-2 rounded-full",
                                log.status === 'success' ? "bg-green-500" : "bg-red-500"
                            )} />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-800">{log.whatsapp_number}</span>
                                <span className="text-[11px] text-gray-400 font-medium">WhatsApp Reminder Sent</span>
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <span className="text-xs font-bold text-gray-500">{new Date(log.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            <span className="text-[10px] text-gray-400 font-medium">{new Date(log.sent_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                ))}
                {logs.length === 0 && (
                    <div className="p-12 text-center text-gray-400 text-sm font-medium italic">
                        No activity recorded yet.
                    </div>
                )}
            </div>
        </Card>
    )
}

export const AdminSettings = ({ initialConfig = {} }: { initialConfig?: Record<string, string> }) => {
    const [config, setConfig] = useState(initialConfig);
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        const result = await updateSystemConfig(config);
        setLoading(false);
        if (result.success) {
            toast.success('System configuration updated successfully');
        } else {
            toast.error(result.error || 'Update failed');
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm space-y-4">
                <h3 className="font-bold text-lg text-gray-900">WhatsApp API Config</h3>
                <div className="space-y-4">
                    <Input 
                        label="Meta Business Phone ID" 
                        placeholder="e.g. 1023485729384" 
                        value={config.whatsapp_phone_id || ''}
                        onChange={e => setConfig({...config, whatsapp_phone_id: e.target.value})}
                    />
                    <Input 
                        label="Meta Access Token" 
                        type="password" 
                        placeholder="EAAI..." 
                        value={config.whatsapp_access_token || ''}
                        onChange={e => setConfig({...config, whatsapp_access_token: e.target.value})}
                    />
                    <Button 
                        className="w-full" 
                        onClick={handleSave} 
                        isLoading={loading}
                    >
                        Save API Credentials
                    </Button>
                </div>
            </Card>

            <Card className="border-none shadow-sm space-y-4">
                <h3 className="font-bold text-lg text-gray-900">Global Notification Strategy</h3>
                <div className="space-y-4">
                    <Input 
                        label="Default Processing Time (IST)" 
                        type="time" 
                        value={config.default_reminder_time || '10:00'}
                        onChange={e => setConfig({...config, default_reminder_time: e.target.value})}
                    />
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Auto-retry failed messages</span>
                        <div className="flex gap-2">
                           <input 
                             type="checkbox" 
                             className="w-5 h-5 accent-blue-600 cursor-pointer" 
                             checked={config.auto_retry === 'true'}
                             onChange={e => setConfig({...config, auto_retry: e.target.checked ? 'true' : 'false'})}
                           />
                        </div>
                    </div>
                    <Button 
                        className="w-full" 
                        variant="outline" 
                        onClick={handleSave}
                        isLoading={loading}
                    >
                        Update Strategy
                    </Button>
                </div>
            </Card>
        </div>
    )
}
