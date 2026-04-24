import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'https://woyyuu-tech.onrender.com';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch {
      setError('Connection failed. Try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm flex flex-col gap-6 p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl">
        <div className="flex flex-col items-center gap-2">
          <img src="/logo.png" alt="Woyyuu Tech" className="w-12 h-12 rounded-2xl shadow-lg" />
          <h1 className="font-black text-xl text-slate-900 dark:text-white">Admin Login</h1>
          <p className="text-xs text-slate-400">Woyyuu Tech Dashboard</p>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
            className="h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500" required />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"
            className="h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500" required />
          {error && <p className="text-xs text-red-500 text-center">{error}</p>}
          <button type="submit" disabled={loading}
            className="h-11 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-60">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
