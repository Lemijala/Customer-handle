// File path: src/components/common/ContactForm.tsx

import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'https://lamitec.onrender.com';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {status === 'success' && (
        <div className="flex items-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-xl">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          Message sent! We'll get back to you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-500 text-white text-sm font-semibold px-4 py-3 rounded-xl">
          <span className="material-symbols-outlined text-[18px]">error</span>
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Name</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} required
            placeholder="Your name"
            className="h-12 px-4 rounded-xl border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#111318] text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required
            placeholder="your@email.com"
            className="h-12 px-4 rounded-xl border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#111318] text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors" />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Phone</span>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
          placeholder="+251 900 000 000"
          className="h-12 px-4 rounded-xl border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#111318] text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors" />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Message</span>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
          placeholder="Tell us about your project..."
          className="px-4 py-3 rounded-xl border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#111318] text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none" />
      </label>

      <button type="submit" disabled={status === 'loading'}
        className="group relative overflow-hidden h-12 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {status === 'loading' ? (
            <><span className="material-symbols-outlined text-[18px] animate-spin">autorenew</span> Sending...</>
          ) : (
            <><span className="material-symbols-outlined text-[18px]">send</span> Send Message</>
          )}
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
