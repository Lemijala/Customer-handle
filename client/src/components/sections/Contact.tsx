import React, { useState } from 'react';

interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

interface SystemStatus {
  uptime: string;
  commits: number;
  responseTime: string;
  version: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    email: 'jane@company.com',
    organization: 'Company Ltd.',
    inquiryType: 'Select inquiry type...',
    message: 'Tell me about your project needs, timeline, and tech stack...'
  });

  const timeSlots: TimeSlot[] = [
    { id: 1, time: '09:00 AM', available: true },
    { id: 2, time: '11:30 AM', available: true },
    { id: 3, time: '02:00 PM', available: true },
    { id: 4, time: '04:30 PM', available: false }
  ];

  const systemStatus: SystemStatus = {
    uptime: '99.9%',
    commits: 142,
    responseTime: '<24h',
    version: 'v3.0.1'
  };

  const pgpPublicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
mQENBF2m... (truncated) ...
rx5lj9u3
=Y/8x
-----END PGP PUBLIC KEY BLOCK-----`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleCopyPGPKey = () => {
    navigator.clipboard.writeText(pgpPublicKey);
    // You can add a toast notification here
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white flex flex-col font-display">
      {/* Navbar - EXACT as in the HTML */}
      <div className="sticky top-0 z-50 w-full border-b border-solid border-b-[#e5e7eb] dark:border-b-border-dark bg-white/80 dark:bg-[#111318]/90 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 py-3">
          <header className="flex items-center justify-between whitespace-nowrap">
            
            {/* Mobile Menu Icon */}
            <div className="md:hidden text-slate-900 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-8 sm:py-12">
        {/* Hero Section - EXACT as in HTML */}
        <div className="flex flex-col gap-4 mb-12">
          <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
            Let's Build Something <span className="text-primary">Scalable</span>
          </h1>
          <p className="text-slate-500 dark:text-text-secondary text-lg max-w-2xl">
            Reach out for consulting, speaking, or mentorship opportunities. I typically respond within 24 hours to professional inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Form & System Status */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">mail</span>
                <h2 className="text-2xl font-bold tracking-tight">Contact Me</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input w-full rounded-xl border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-gray-400 dark:placeholder:text-[#5a6275]"
                      placeholder="Jane Doe"
                    />
                  </label>
                  
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Work Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input w-full rounded-xl border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-gray-400 dark:placeholder:text-[#5a6275]"
                      placeholder="jane@company.com"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Organization</span>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="form-input w-full rounded-xl border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-gray-400 dark:placeholder:text-[#5a6275]"
                      placeholder="Company Ltd."
                    />
                  </label>
                  
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Inquiry Type</span>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="form-select w-full rounded-xl border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4"
                    >
                      <option>Select inquiry type...</option>
                      <option>Technical Consulting</option>
                      <option>Full-time Opportunity</option>
                      <option>Speaking Engagement</option>
                      <option>Mentorship</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="form-textarea w-full rounded-xl border-gray-300 dark:border-[#3b4354] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:ring-primary min-h-[160px] p-4 placeholder:text-gray-400 dark:placeholder:text-[#5a6275]"
                    placeholder="Tell me about your project needs, timeline, and tech stack..."
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25"
                  >
                    <span>Submit</span>
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Portfolio Analytics Widget - EXACT as in HTML */}
            <div className="bg-gradient-to-br from-slate-900 to-black border border-border-dark rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-6xl text-primary">monitoring</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined text-sm animate-pulse">circle</span>
                <h3 className="text-xs font-mono uppercase tracking-widest font-bold">Live System Status</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-secondary font-mono">UPTIME</span>
                  <span className="text-xl font-bold font-mono text-white">{systemStatus.uptime}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-secondary font-mono">COMMITS (MO)</span>
                  <span className="text-xl font-bold font-mono text-white">{systemStatus.commits}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-secondary font-mono">RESPONSE TIME</span>
                  <span className="text-xl font-bold font-mono text-white">{systemStatus.responseTime}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-secondary font-mono">VERSION</span>
                  <span className="text-xl font-bold font-mono text-white">{systemStatus.version}</span>
                </div>
              </div>
              {/* Decorative graph line */}
              <div className="mt-6 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(19,91,236,0.8)]"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Engagement & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Scheduling Widget */}
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Schedule a Call</h3>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">Available</span>
                </div>
              </div>

              {/* Calendar UI */}
              <div className="border border-gray-200 dark:border-border-dark rounded-xl overflow-hidden bg-slate-50 dark:bg-[#111318]">
                <div className="p-4 border-b border-gray-200 dark:border-border-dark flex items-center justify-between">
                  <span className="font-bold text-sm">October 2023</span>
                  <div className="flex gap-1">
                    <button className="p-1 hover:bg-gray-200 dark:hover:bg-slate-800 rounded text-text-secondary">
                      <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button className="p-1 hover:bg-gray-200 dark:hover:bg-slate-800 rounded text-text-secondary">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <span key={index} className="text-[10px] text-text-secondary">
                        {day}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {/* Previous month days */}
                    <div className="aspect-square flex items-center justify-center text-xs text-text-secondary opacity-30">29</div>
                    <div className="aspect-square flex items-center justify-center text-xs text-text-secondary opacity-30">30</div>
                    
                    {/* Current month days */}
                    {[1, 2, 3, 4, 5, 6].map((day) => (
                      <div key={day} className="aspect-square flex items-center justify-center text-xs">
                        {day}
                      </div>
                    ))}
                    
                    {/* October 7th - selected */}
                    <div className="aspect-square flex items-center justify-center text-xs bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/40 cursor-pointer">
                      7
                    </div>
                    
                    {/* Rest of the days */}
                    {[8, 9, 10, 11, 12].map((day) => (
                      <div key={day} className="aspect-square flex items-center justify-center text-xs">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark">
                  <h4 className="text-xs font-bold text-text-secondary mb-3 uppercase tracking-wider">
                    Available Slots (Oct 7)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.filter(slot => slot.available).map((slot) => (
                      <button
                        key={slot.id}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                          slot.time === '09:00 AM'
                            ? 'border-primary text-primary hover:bg-primary hover:text-white'
                            : 'border-gray-200 dark:border-border-dark text-slate-500 dark:text-gray-400 hover:border-primary hover:text-primary'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="font-bold text-lg">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#111318] transition-colors group"
                  href="mailto:lemesa@example.com"
                >
                  <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-text-secondary">Email</span>
                    <span className="font-medium text-sm">tlemesagirma@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#111318] transition-colors group">
                  <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-text-secondary">Location</span>
                    <span className="font-medium text-sm">Adis Abeba, CA (Remote)</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <a
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#24292f] text-white hover:bg-black transition-colors"
                    href="https://github.com/"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm font-bold">GitHub</span>
                  </a>

                  <a
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#0077b5] text-white hover:bg-[#005e93] transition-colors"
                    href="#"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-bold">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* PGP Key Block */}
            <div className="bg-[#111318] border border-border-dark rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">lock</span>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">PGP Public Key</span>
                </div>
                <button
                  onClick={handleCopyPGPKey}
                  className="text-xs text-primary hover:text-blue-400 font-medium flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">content_copy</span> Copy
                </button>
              </div>
              <div className="bg-black/50 rounded-lg p-3 border border-border-dark overflow-x-auto">
                <pre className="text-[10px] leading-relaxed font-mono text-gray-400 whitespace-pre-wrap break-all">
                  {pgpPublicKey}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
          {/* Enhanced Professional Footer */}
<footer className="border-t border-gray-200 dark:border-border-dark mt-auto bg-white dark:bg-[#111318]">
  <div className="max-w-[1500px] mx-auto px-4 sm:px-10 py-8">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      {/* Brand & Description */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white">code</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Lemesa Girma</h3>
            <p className="text-xs text-slate-500 dark:text-text-secondary">Full Stack Developer</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-gray-400">
          Building scalable solutions with modern web technologies. Available for consulting and full-time opportunities.
        </p>
        <div className="flex gap-3">
          <a 
            href="https://github.com/" 
            className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="GitHub"
          >
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a 
            href="https://linkedin.com/" 
            className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a 
            href="https://twitter.com/" 
            className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Twitter"
          >
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a 
            href="mailto:tlemesagirma@gmail.com" 
            className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Email"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Quick Links</h4>
        <ul className="space-y-3">
          <li>
            <a 
              href="/" 
              className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              Home
            </a>
          </li>
          <li>
            <a 
              href="/projects" 
              className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              Projects
            </a>
          </li>
          <li>
            <a 
              href="/blog" 
              className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              Blog
            </a>
          </li>
          <li>
            <a 
              href="/resume" 
              className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Services</h4>
        <ul className="space-y-3">
          <li>
            <a 
              href="/consulting" 
              className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">business_center</span>
              Technical Consulting
            </a>
          </li>
          <li>
            <a 
              href="/development" 
              className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">code</span>
              Web Development
            </a>
          </li>
          <li>
            <a 
              href="/mentorship" 
              className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">school</span>
              Mentorship
            </a>
          </li>
          <li>
            <a 
              href="/speaking" 
              className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[14px]">mic</span>
              Speaking Engagements
            </a>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Stay Updated</h4>
        <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
          Subscribe to my newsletter for tech insights and updates.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-border-dark bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:ring-primary text-sm"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 dark:border-border-dark my-8"></div>

    {/* Bottom Bar */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-slate-900 dark:text-white font-bold text-sm">© {new Date().getFullYear()} Lemesa Girma. All rights reserved.</span>
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-text-secondary">
          <span>Built with nextjs  & nestjs</span>
          <span className="hidden sm:inline">•</span>
          <span>Deployed on Vercel</span>
          <span className="hidden sm:inline">•</span>
          <span>Typescript</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <a 
          href="/privacy" 
          className="text-sm text-slate-500 dark:text-text-secondary hover:text-primary transition-colors"
        >
          Privacy Policy
        </a>
        <a 
          href="/terms" 
          className="text-sm text-slate-500 dark:text-text-secondary hover:text-primary transition-colors"
        >
          Terms of Service
        </a>
        <a 
          href="/cookies" 
          className="text-sm text-slate-500 dark:text-text-secondary hover:text-primary transition-colors"
        >
          Cookie Policy
        </a>
        <a 
          href="/sitemap" 
          className="text-sm text-slate-500 dark:text-text-secondary hover:text-primary transition-colors"
        >
          Sitemap
        </a>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-slate-100 dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-full">
          <span className="text-[10px] font-mono font-medium text-slate-500 dark:text-gray-400">
            v3.0.1 (stable)
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-text-secondary">
          <span className="material-symbols-outlined text-[12px]">visibility</span>
          <span>1.2k visitors</span>
        </div>
      </div>
    </div>

    {/* Tech Stack Badges */}
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-gray-400 font-medium">
        React
      </span>
      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-gray-400 font-medium">
        TypeScript
      </span>
      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-gray-400 font-medium">
        Node.js
      </span>
      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-gray-400 font-medium">
        MongoDB
      </span>
      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-gray-400 font-medium">
        AWS
      </span>
      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-gray-400 font-medium">
        Docker
      </span>
      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-gray-400 font-medium">
        GraphQL
      </span>
    </div>
  </div>
</footer>
      
    </div>
  );
};

export default Contact;