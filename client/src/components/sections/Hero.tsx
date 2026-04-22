// File path: src/components/sections/Hero.tsx

import { useState, useEffect } from 'react';
import ContactForm from '../common/ContactForm';
import Reveal from '../common/Reveal';

const API_URL = import.meta.env.VITE_API_URL || 'https://lamitec.onrender.com';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/health`).catch(() => {});
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">

        {/* Centered Hero Text */}
        <div className="relative flex flex-col items-center text-center gap-6 mb-12">

          {/* Floating left image */}
          <Reveal direction="left" duration={900} delay={400} className="hidden lg:flex flex-col items-end gap-3 absolute left-0 top-1/2 -translate-y-1/2">
            <div className="w-40 xl:w-48 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img src="/pc-image.png" alt="Project preview" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 bg-[#2a2a2a] border border-gray-700 rounded-full px-4 py-2 self-end mr-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-green-400 opacity-60 animate-pulse" style={{animationDelay:'0.2s'}}></span>
                <span className="w-2 h-2 rounded-full bg-green-400 opacity-30 animate-pulse" style={{animationDelay:'0.4s'}}></span>
              </div>
            </div>
          </Reveal>

          {/* Floating right image */}
          <Reveal direction="right" duration={900} delay={400} className="hidden lg:flex flex-col items-start gap-3 absolute right-0 top-1/2 -translate-y-1/2">
            <div className="self-start ml-4 text-white opacity-60">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M4 0l16 12-7 2-4 8z"/></svg>
            </div>
            <div className="flex items-center gap-1 bg-[#2a2a2a] border border-gray-700 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-gray-400 opacity-60 animate-pulse" style={{animationDelay:'0.2s'}}></span>
              <span className="w-2 h-2 rounded-full bg-gray-400 opacity-30 animate-pulse" style={{animationDelay:'0.4s'}}></span>
            </div>
            <div className="w-40 xl:w-48 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img src="/left-side-mobile-screen.png" alt="Mobile App" className="w-full h-full object-cover" />
            </div>
          </Reveal>

          {/* Title */}
          <Reveal direction="down" duration={700} delay={0}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              LemiTech
            </h1>
          </Reveal>

          <Reveal direction="up" duration={700} delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-slate-700 dark:text-gray-300">
              Where Ideas Become<br />Reality
            </h2>
          </Reveal>

          <Reveal direction="up" duration={700} delay={200}>
            <p className="text-slate-500 dark:text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
              We turn complex ideas into powerful digital products. From scalable web platforms to sleek mobile apps — LemiTech engineers solutions that drive real business growth across Ethiopia and beyond.
            </p>
          </Reveal>

          {/* Subscribe */}
          <Reveal direction="up" duration={700} delay={300}>
            <form onSubmit={handleSubscribe} className="flex items-center gap-0 w-full max-w-md mt-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 h-12 px-5 rounded-l-full border border-gray-300 dark:border-[#282e39] bg-white dark:bg-[#162032] text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary text-sm"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-r-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/30 text-white font-bold text-sm transition-all duration-300 whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </Reveal>
        </div>

        {/* Flag image */}
        <Reveal direction="zoom" duration={900} delay={200}>
          <div className="max-w-lg mx-auto w-full rounded-2xl overflow-hidden bg-gray-900 aspect-video border border-gray-800 hover:scale-[1.02] transition-transform duration-300">
            <img src="/lemtech-flag.png" alt="LemiTech Flag" className="w-full h-full object-cover"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
        </Reveal>
      </div>

      {/* Trusted by Organizations */}
      <Reveal direction="up" duration={800} delay={0}>
        <div className="w-full py-8 border-t border-gray-200 dark:border-[#282e39] overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-6">
            Trusted by Organizations
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
            <div className="flex items-center gap-12 animate-marquee-slower" style={{ whiteSpace: 'nowrap', willChange: 'transform' }}>
              {[...Array(2)].flatMap(() => [
                { name: 'Endurance Youth', logo: '/logos/org1.png' },
                { name: 'Horan Software', logo: '/logos/org2.png' },
                { name: 'LemiTech Solutions', logo: '/logos/org3.png' },
                { name: 'Haramaya University', logo: '/logos/org4.png' },
                { name: 'Addis Tech Hub', logo: '/logos/org5.png' },
                { name: 'Organization 6', logo: '/logos/org6.png' },
                { name: 'Organization 7', logo: '/logos/org7.png' },
                { name: 'Organization 8', logo: '/logos/org8.png' },
              ]).map((org, i) => (
                <div key={i} className="inline-flex items-center justify-center flex-shrink-0 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src={org.logo} alt={org.name} className="h-10 w-auto object-contain"
                    onError={e => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = 'none';
                      const fallback = el.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'inline';
                    }} />
                  <span className="hidden text-sm font-semibold text-slate-400 dark:text-gray-500 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg">{org.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Contact Form */}
      <div className="w-full border-t border-gray-200 dark:border-[#282e39] py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal direction="up" duration={800} delay={0}>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">Get In Touch</h2>
              <p className="text-slate-500 dark:text-gray-400">Have a project in mind? Let's talk about it.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal direction="left" duration={900} delay={100}>
              <div className="flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <img src="/loc1.png" alt="Addis Ababa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">Office Location</span>
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                      <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                      Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <img src="/l2.png" alt="Bule Hora" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">Branch Location</span>
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                      <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                      Bule Hora, Ethiopia
                    </div>
                  </div>
                </div>
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
                    <a href="mailto:tlemesagirma@gmail.com" className="text-sm text-slate-600 dark:text-gray-300 hover:text-primary transition-colors">tlemesagirma@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
                    <a href="tel:+251914625479" className="text-sm text-slate-600 dark:text-gray-300 hover:text-primary transition-colors">+251 914 625 479</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" duration={900} delay={200}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
