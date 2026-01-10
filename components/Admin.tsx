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
  updateSystemConfig
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
import { cn, INDIAN_STATES, validateGSTIN } from '@/utils';

export const BrandLogo = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-sm border border-gray-100">
                <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain" 
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                            parent.innerHTML = '<span class="text-blue-600 font-bold">G</span>';
                        }
                    }} 
                />
            </div>
            <div>
                <h1 className="text-sm font-bold text-gray-900 leading-tight">GovernanceAI</h1>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none">Admin Hub</p>
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
  const [form, setForm] = useState({
    whatsapp_number: '',
    full_name: '',
    gstin: '',
    business_name: '',
    state: '',
    filing_type: 'monthly' as 'monthly' | 'qrmp',
    next_reminder_date: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!validateGSTIN(form.gstin)) throw new Error('Invalid GSTIN format');
      if (!form.whatsapp_number.startsWith('+91')) throw new Error('WhatsApp Number must start with +91');

      const result = await adminCreateUser(form);
      
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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white p-0 overflow-hidden shadow-2xl border-none">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-xl font-bold text-gray-900">Add New Client</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input 
              label="WhatsApp Number" 
              placeholder="+919999999999" 
              required 
              value={form.whatsapp_number}
              onChange={e => setForm({...form, whatsapp_number: e.target.value})}
            />
            <Input 
              label="Full Name" 
              placeholder="John Doe" 
              required 
              value={form.full_name}
              onChange={e => setForm({...form, full_name: e.target.value})}
            />
            <Input 
              label="GSTIN" 
              placeholder="22AAAAA0000A1Z5" 
              required 
              value={form.gstin}
              onChange={e => setForm({...form, gstin: e.target.value.toUpperCase()})}
            />
            <Input 
              label="Business Name" 
              placeholder="Legal Entity Name" 
              required 
              value={form.business_name}
              onChange={e => setForm({...form, business_name: e.target.value})}
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">State</label>
              <select
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500/20"
                value={form.state}
                required
                onChange={e => setForm({...form, state: e.target.value})}
              >
                <option value="">Select State</option>
                {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Filing Type</label>
              <select
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500/20"
                value={form.filing_type}
                required
                onChange={e => setForm({...form, filing_type: e.target.value as any})}
              >
                <option value="monthly">Monthly</option>
                <option value="qrmp">QRMP (Quarterly)</option>
              </select>
            </div>
            <Input 
              label="Next Reminder Date" 
              type="date"
              value={form.next_reminder_date}
              onChange={e => setForm({...form, next_reminder_date: e.target.value})}
            />
          </div>
          
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
    { label: 'Total Users', value: total, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Monthly Filers', value: monthly, icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'QRMP Filers', value: qrmp, icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Active Reminders', value: active, icon: ShieldCheck, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4 flex items-center gap-4 border-none shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)]">
          <div className={cn("p-3 rounded-xl", stat.bg)}>
            <stat.icon size={24} className={stat.color} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export const EditUserModal = ({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: ExtendedUser | null }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    full_name: '',
    gstin: '',
    business_name: '',
    state: '',
    filing_type: 'monthly' as 'monthly' | 'qrmp',
    next_reminder_date: ''
  });

  useEffect(() => {
    if (user) {
      setForm({
        full_name: user.full_name || '',
        gstin: user.gst_details?.gstin || '',
        business_name: user.gst_details?.business_name || '',
        state: user.gst_details?.state || '',
        filing_type: user.gst_details?.filing_type || 'monthly',
        next_reminder_date: user.reminder_settings?.next_reminder_date || ''
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
              onChange={e => setForm({...form, gstin: e.target.value.toUpperCase()})}
            />
            <Input 
              label="Business Name" 
              value={form.business_name}
              onChange={e => setForm({...form, business_name: e.target.value})}
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">State</label>
              <select
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500/20"
                value={form.state}
                onChange={e => setForm({...form, state: e.target.value})}
              >
                {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Filing Type</label>
              <select
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md"
                value={form.filing_type}
                onChange={e => setForm({...form, filing_type: e.target.value as any})}
              >
                <option value="monthly">Monthly</option>
                <option value="qrmp">QRMP (Quarterly)</option>
              </select>
            </div>
            <Input 
              label="Next Reminder" 
              type="date"
              value={form.next_reminder_date}
              onChange={e => setForm({...form, next_reminder_date: e.target.value})}
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white p-0 overflow-hidden shadow-2xl border-none h-[80vh] flex flex-col">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{user.full_name}</h3>
            <p className="text-sm text-gray-500">{user.whatsapp_number}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="text-[10px] font-bold text-blue-600 uppercase">Filing Type</p>
              <p className="text-lg font-bold text-blue-900 uppercase">{user.gst_details?.filing_type || '—'}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <p className="text-[10px] font-bold text-purple-600 uppercase">Next Reminder</p>
              <p className="text-lg font-bold text-purple-900">{user.reminder_settings?.next_reminder_date || 'Not Set'}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <p className="text-[10px] font-bold text-green-600 uppercase">Account Status</p>
              <p className="text-lg font-bold text-green-900">{user.is_active ? 'Active' : 'Paused'}</p>
            </div>
          </div>

          {/* Details Sections */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Building2 size={14} /> Business Information
              </h4>
              <div className="space-y-2">
                <div>
                  <label className="text-[10px] text-gray-400 font-bold uppercase">Business Name</label>
                  <p className="text-sm font-medium text-gray-800">{user.gst_details?.business_name || '—'}</p>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 font-bold uppercase">GSTIN</label>
                  <p className="text-sm font-mono font-bold text-blue-600">{user.gst_details?.gstin || '—'}</p>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 font-bold uppercase">PAN</label>
                  <p className="text-sm font-mono font-bold text-gray-800">{user.gst_details?.pan || '—'}</p>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 font-bold uppercase">State</label>
                  <p className="text-sm font-medium text-gray-800">{user.gst_details?.state || '—'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <History size={14} /> Reminder Schedule
              </h4>
              <div className="space-y-2">
                 <div>
                  <label className="text-[10px] text-gray-400 font-bold uppercase">Frequency</label>
                  <p className="text-sm font-medium text-gray-800">{user.reminder_settings?.frequency || 'Monthly'}</p>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 font-bold uppercase">Target Time</label>
                  <p className="text-sm font-medium text-gray-800">{user.reminder_settings?.reminder_time || '10:00 AM'}</p>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 font-bold uppercase">Days Scheduled</label>
                  <div className="flex gap-1 mt-1">
                    {user.reminder_settings?.reminder_days.map(day => (
                      <span key={day} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-gray-600">Day {day}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Billing / Logo History Placeholder */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <History size={14} /> Recent Reminder Activity
            </h4>
            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-50">
              {/* This would normally be filtered logs for this user */}
              <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">Automatic Reminder</span>
                </div>
                <span className="text-xs text-gray-400">Jan 07, 2026</span>
              </div>
              <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">Manual Trigger</span>
                </div>
                <span className="text-xs text-gray-400">Dec 20, 2025</span>
              </div>
              <div className="p-8 text-center text-xs text-gray-400 italic">
                Full activity history will appear here.
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex gap-3">
           <Button className="flex-1" variant="outline" onClick={() => {
             onClose();
             // Logic to trigger edit from here could be added
           }}>
             <Edit2 size={16} /> Edit Settings
           </Button>
           <Button className="flex-1" onClick={() => onSendManual(user.whatsapp_number)}>
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
        u.whatsapp_number.includes(searchTerm) || 
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
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4 w-full md:w-auto flex-1">
          <div className="relative flex-1 md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search clients, GSTIN, business..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all text-sm shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all shadow-sm cursor-pointer"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Filers</option>
            <option value="monthly">Monthly</option>
            <option value="qrmp">QRMP (Quarterly)</option>
            <option value="disabled">Inactive</option>
          </select>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="w-full md:w-auto rounded-xl py-2.5 px-6 flex gap-2">
          <Plus size={18} /> Add Client
        </Button>
      </div>

      <Card className="p-0 border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-widest font-bold border-b border-gray-100">
                <th className="px-6 py-4">Client Detail</th>
                <th className="px-6 py-4">Tax Information</th>
                <th className="px-6 py-4 text-center">Plan</th>
                <th className="px-6 py-4">Next Reminder</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredUsers.map((user) => (
                <tr 
                  key={user.whatsapp_number} 
                  className="hover:bg-blue-50/30 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4" onClick={() => setSelectedUser(user)}>
                    <div className="font-semibold text-gray-900">{user.full_name || 'Unnamed Client'}</div>
                    <div className="text-xs text-gray-500 font-medium">{user.whatsapp_number}</div>
                  </td>
                  <td className="px-6 py-4" onClick={() => setSelectedUser(user)}>
                    <div className="text-sm font-mono font-bold text-blue-600">{user.gst_details?.gstin || '—'}</div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold truncate max-w-[140px]">
                      {user.gst_details?.business_name || 'No business name'}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center" onClick={() => setSelectedUser(user)}>
                    <div className="flex flex-col items-center">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                        user.gst_details?.filing_type === 'monthly' ? "bg-purple-50 text-purple-600" : "bg-emerald-50 text-emerald-600"
                      )}>
                        {user.gst_details?.filing_type || 'N/A'}
                      </span>
                      <span className="text-[9px] text-gray-400 mt-1">{user.reminder_settings?.frequency}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4" onClick={() => setSelectedUser(user)}>
                    <div className="text-sm font-medium text-gray-700">
                      {user.reminder_settings?.next_reminder_date ? (
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {new Date(user.reminder_settings.next_reminder_date).toLocaleDateString()}
                        </div>
                      ) : (
                        <span className="text-gray-300">Not set</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4" onClick={() => setSelectedUser(user)}>
                    <div className="flex items-center gap-1.5">
                      <div className={cn("w-1.5 h-1.5 rounded-full", user.is_active ? "bg-green-500 animate-pulse" : "bg-red-400")} />
                      <span className={cn(
                        "text-[11px] font-bold uppercase",
                        user.is_active ? "text-green-700" : "text-red-600"
                      )}>
                        {user.is_active ? "Live" : "Disabled"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                           onClick={(e) => { e.stopPropagation(); handleManualSend(user.whatsapp_number); }}
                           className="p-2 text-blue-600 hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-blue-100 transition-all" 
                           title="Send Reminder"
                      >
                        <Send size={14} />
                      </button>
                      <button 
                           onClick={(e) => { e.stopPropagation(); setEditingUser(user); }}
                           className="p-2 text-gray-600 hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-gray-100 transition-all" 
                           title="Edit Client"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button 
                          onClick={(e) => { e.stopPropagation(); handleToggle(user.whatsapp_number, user.is_active); }}
                          className={cn("p-2 rounded-lg shadow-sm border border-transparent transition-all", user.is_active ? "text-amber-600 hover:bg-white hover:border-amber-100" : "text-green-600 hover:bg-white hover:border-green-100")}
                      >
                        {user.is_active ? <ShieldAlert size={14} /> : <ShieldCheck size={14} />}
                      </button>
                      <button 
                          onClick={(e) => { e.stopPropagation(); handleDelete(user.whatsapp_number); }}
                          className="p-2 text-red-600 hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-red-100 transition-all"
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
