// File path: src/components/common/ContactForm.tsx

import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'https://lamitec.onrender.com';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', organization: '', inquiryType: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setForm({ name: '', email: '', phone: '', organization: '', inquiryType: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "h-12 px-4 rounded-xl border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#111318] text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";
  const labelClass = "flex flex-col gap-1.5";
  const labelTextClass = "text-sm font-medium text-slate-700 dark:text-gray-300";

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
        <label className={labelClass}>
          <span className={labelTextClass}>Name *</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
        </label>
        <label className={labelClass}>
          <span className={labelTextClass}>Email *</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className={labelClass}>
          <span className={labelTextClass}>Phone</span>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+251 900 000 000" className={inputClass} />
        </label>
        <label className={labelClass}>
          <span className={labelTextClass}>Organization</span>
          <input type="text" name="organization" value={form.organization} onChange={handleChange} placeholder="Your company / org" className={inputClass} />
        </label>
      </div>

      <label className={labelClass}>
        <span className={labelTextClass}>What do you need?</span>
        <select name="inquiryType" value={form.inquiryType} onChange={handleChange}
          className="h-12 px-4 rounded-xl border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#111318] text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors">
          <option value="">Select a service...</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile App">Mobile App</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Backend / API">Backend / API</option>
          <option value="Consultation">Consultation</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className={labelClass}>
        <span className={labelTextClass}>Message *</span>
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
