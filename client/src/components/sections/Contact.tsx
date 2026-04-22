import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'https://lamitec.onrender.com';

const StarRating: React.FC<{ value: number; onChange: (v: number) => void }> = ({ value, onChange }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} type="button" onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)} onMouseLeave={() => setHovered(0)}
          className="text-2xl transition-transform hover:scale-110">
          <span className={`material-symbols-outlined ${(hovered || value) >= star ? 'text-yellow-400' : 'text-gray-600'}`}>star</span>
        </button>
      ))}
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', organization: '', inquiryType: '', message: '', rating: 0 });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [attempt, setAttempt] = useState(0);

  // Wake up the backend as soon as this section loads
  useEffect(() => {
    fetch(`${API_URL}/api/health`).catch(() => {});
  }, []);

  const timeSlots = [
    { id: 1, time: '09:00 AM', available: true },
    { id: 2, time: '11:30 AM', available: true },
    { id: 3, time: '02:00 PM', available: true },
    { id: 4, time: '04:30 PM', available: false },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMsg('');
    setAttempt(0);

    const trySubmit = async (attemptNum: number): Promise<void> => {
      setAttempt(attemptNum);
      try {
        const res = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, rating: formData.rating || undefined }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Submission failed');
        setStatus('success');
        setStatusMsg('Message received! I will get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', organization: '', inquiryType: '', message: '', rating: 0 });
        setTimeout(() => setStatus('idle'), 4000);
      } catch (err: unknown) {
        if (attemptNum < 3) {
          const delay = attemptNum === 0 ? 8000 : attemptNum === 1 ? 20000 : 25000;
          setStatusMsg(`Server is waking up, retrying... (${attemptNum + 1}/3)`);
          await new Promise(r => setTimeout(r, delay));
          return trySubmit(attemptNum + 1);
        }
        setStatus('error');
        setStatusMsg('Server is waking up. Please try again in 30 seconds.');
        setTimeout(() => setStatus('idle'), 6000);
      }
    };

    await trySubmit(0);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <div className="w-full max-w-[1280px] mx-auto px-3 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
            The Best Way to Predict<br />the Future is to <span className="text-primary">Build It</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 text-lg max-w-2xl">
            Reach out for consulting, speaking, or mentorship opportunities. I typically respond within 24 hours to professional inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-white dark:bg-[#162032] border border-gray-200 dark:border-[#282e39] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">mail</span>
                <h2 className="text-2xl font-bold tracking-tight">Contact Me</h2>
              </div>

              {/* Toast */}
              {status === 'success' && (
                <div className="flex items-center gap-3 bg-green-500 text-white font-semibold text-sm px-5 py-4 rounded-xl shadow-lg shadow-green-500/30 mb-5 animate-fadeIn">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  Message received! I will get back to you within 24 hours.
                </div>
              )}
              {status === 'loading' && statusMsg && (
                <div className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium text-sm px-5 py-4 rounded-xl mb-5">
                  <span className="material-symbols-outlined text-[20px] animate-spin">autorenew</span>
                  {statusMsg}
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-500 text-white font-semibold text-sm px-5 py-4 rounded-xl shadow-lg shadow-red-500/30 mb-5 animate-fadeIn">
                  <span className="material-symbols-outlined text-[20px]">error</span>
                  {statusMsg}
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Name</span>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 h-12 px-4 placeholder:text-gray-400 transition-colors"
                      placeholder="Lemesa Girma" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Work Email</span>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 h-12 px-4 placeholder:text-gray-400 transition-colors"
                      placeholder="jane@company.com" />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Phone Number</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 h-12 px-4 placeholder:text-gray-400 transition-colors"
                      placeholder="+251 900 000 000" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Organization</span>
                    <input type="text" name="organization" value={formData.organization} onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 h-12 px-4 placeholder:text-gray-400 transition-colors"
                      placeholder="Company Ltd." />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Inquiry Type</span>
                    <select name="inquiryType" value={formData.inquiryType} onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 h-12 px-4 transition-colors">
                      <option value="">Select inquiry type...</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="fulltime">Full-time Opportunity</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="mentorship">Mentorship</option>
                    </select>
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Message</span>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5}
                    className="w-full rounded-xl border border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[140px] p-4 placeholder:text-gray-400 transition-colors resize-none"
                    placeholder="Tell me about your project needs, timeline, and tech stack..." />
                </label>

                {/* Star Rating */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Rate your experience (optional)</span>
                  <StarRating value={formData.rating} onChange={(v) => setFormData((p) => ({ ...p, rating: v }))} />
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <button type="submit" disabled={status === 'loading'}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">
                      {status === 'loading'
                        ? attempt === 0 ? 'Sending...'
                        : `Retrying... (${attempt}/3)`
                        : 'Submit'}
                    </span>
                    <span className="material-symbols-outlined text-[20px] relative z-10 group-hover:translate-x-1 transition-transform">
                      {status === 'loading' ? 'hourglass_empty' : 'send'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Location Images + Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Addis Ababa */}
            <div className="relative rounded-2xl overflow-hidden h-52 group">
              <img src="/loc1.png" alt="Addis Ababa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Office Location</span>
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                  Addis Ababa, Ethiopia
                </div>
              </div>
            </div>

            {/* Bule Hora */}
            <div className="relative rounded-2xl overflow-hidden h-52 group">
              <img src="/l2.png" alt="Bule Hora" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Branch Location</span>
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                  Bule Hora, Ethiopia
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-[#162032] border border-gray-200 dark:border-[#282e39] rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">flag</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Ethiopia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                <span className="text-sm text-slate-600 dark:text-gray-300">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                <a href="mailto:tlemesagirma@gmail.com" className="text-sm text-slate-600 dark:text-gray-300 hover:text-primary transition-colors">
                  tlemesagirma@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
                <a href="tel:+251914625479" className="text-sm text-slate-600 dark:text-gray-300 hover:text-primary transition-colors">
                  +251 914 625 479
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
