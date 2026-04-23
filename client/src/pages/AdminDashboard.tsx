import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'https://lamitec.onrender.com';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

interface Subscriber {
  _id: string;
  email: string;
  createdAt: string;
}

interface Stats {
  totalMessages: number;
  unreadMessages: number;
  totalSubscribers: number;
  avgRating: number | null;
  dbStatus: string;
  uptime: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [token] = useState(() => localStorage.getItem('adminToken'));
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminDark') === 'true' || document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('adminDark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('adminDark', 'false');
    }
  }, [dark]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'subscribers'>('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) { navigate('/admin/login'); return; }
    fetchAll();
  }, [token]);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const [statsRes, contactsRes, subsRes] = await Promise.all([
        fetch(`${API_URL}/api/stats`, { headers }),
        fetch(`${API_URL}/api/contact`, { headers }),
        fetch(`${API_URL}/api/subscribe`, { headers }),
      ]);
      const statsData = await statsRes.json();
      const contactsData = await contactsRes.json();
      const subsData = await subsRes.json();
      if (statsData.success) setStats(statsData.data);
      if (contactsData.success) setContacts(contactsData.data);
      if (subsData.success) setSubscribers(subsData.data);
    } catch { /* silently fail */ }
    setLoading(false);
  };

  const markRead = async (id: string) => {
    try {
      await fetch(`${API_URL}/api/contact/${id}/read`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(prev => prev.map(c => c._id === id ? { ...c, isRead: true } : c));
    } catch { /* silently fail */ }
  };

  const logout = () => { localStorage.removeItem('adminToken'); navigate('/admin/login'); };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        <p className="text-slate-500 text-sm">Loading dashboard...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-slate-900 dark:text-white">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="LemiTech" className="w-8 h-8 rounded-lg" />
          <div>
            <h1 className="font-black text-lg">Admin Dashboard</h1>
            <p className="text-xs text-slate-400">LemiTech</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(d => !d)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <span className="material-symbols-outlined text-[18px]">{dark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button onClick={logout} className="flex items-center gap-2 text-sm text-slate-500 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Messages', value: stats?.totalMessages ?? 0, icon: 'mail', gradient: 'from-blue-500 to-cyan-400' },
            { label: 'Unread', value: stats?.unreadMessages ?? 0, icon: 'mark_email_unread', gradient: 'from-orange-500 to-amber-400' },
            { label: 'Subscribers', value: stats?.totalSubscribers ?? 0, icon: 'group', gradient: 'from-emerald-500 to-teal-400' },
            { label: 'DB Status', value: stats?.dbStatus ?? '—', icon: 'database', gradient: 'from-violet-500 to-purple-400' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
                <span className="material-symbols-outlined text-white text-[18px]">{s.icon}</span>
              </div>
              <div>
                <p className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${s.gradient}`}>{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-2xl w-fit">
          {(['overview', 'contacts', 'subscribers'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Contacts tab */}
        {activeTab === 'contacts' && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-slate-400">{contacts.length} total messages</p>
            {contacts.map(c => (
              <div key={c._id} className={`flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-gray-800 border transition-all duration-300 cursor-pointer ${
                c.isRead ? 'border-gray-200 dark:border-gray-700' : 'border-blue-500/40 shadow-md shadow-blue-500/10'
              }`} onClick={() => !c.isRead && markRead(c._id)}>
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                      {c.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-slate-900 dark:text-white">{c.name}</p>
                        {!c.isRead && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500 text-white">NEW</span>}
                      </div>
                      <p className="text-xs text-slate-400">{new Date(c.createdAt).toLocaleDateString()} · {new Date(c.createdAt).toLocaleTimeString()}</p>
                    </div>
                  </div>
                  {!c.isRead && (
                    <button onClick={e => { e.stopPropagation(); markRead(c._id); }} className="text-xs text-blue-500 hover:underline flex-shrink-0">Mark read</button>
                  )}
                </div>

                {/* Contact details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-[16px]">mail</span>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Email</p>
                      <p className="text-sm text-slate-700 dark:text-gray-200 break-all">{c.email}</p>
                    </div>
                  </div>
                  {c.phone && (
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-500 text-[16px]">phone</span>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Phone</p>
                        <p className="text-sm text-slate-700 dark:text-gray-200">{c.phone}</p>
                      </div>
                    </div>
                  )}
                  {c.organization && (
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-violet-500 text-[16px]">business</span>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Organization</p>
                        <p className="text-sm text-slate-700 dark:text-gray-200">{c.organization}</p>
                      </div>
                    </div>
                  )}
                </div>

                {c.inquiryType && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-slate-500 w-fit">{c.inquiryType}</span>
                )}

                {/* Message */}
                <div className="bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Message</p>
                  <p className="text-sm text-slate-700 dark:text-gray-200 leading-relaxed">{c.message}</p>
                </div>

                {/* Reply button */}
                <a href={`mailto:${c.email}`} onClick={e => e.stopPropagation()}
                  className="self-start flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300">
                  <span className="material-symbols-outlined text-[14px]">reply</span>
                  Reply via Email
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Subscribers tab */}
        {activeTab === 'subscribers' && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-slate-400">{subscribers.length} total subscribers</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {subscribers.map(s => (
                <div key={s._id} className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                    {s.email[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{s.email}</p>
                    <p className="text-xs text-slate-400">{new Date(s.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overview tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-black text-lg">Recent Messages</h3>
              {contacts.slice(0, 5).map(c => (
                <div key={c._id} className="flex items-center gap-3 py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                    {c.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{c.name}</p>
                    <p className="text-xs text-slate-400 truncate">{c.message.slice(0, 60)}...</p>
                  </div>
                  {!c.isRead && <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-black text-lg">Recent Subscribers</h3>
              {subscribers.slice(0, 5).map(s => (
                <div key={s._id} className="flex items-center gap-3 py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                    {s.email[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{s.email}</p>
                    <p className="text-xs text-slate-400">{new Date(s.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
