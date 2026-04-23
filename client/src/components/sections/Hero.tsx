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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await fetch(`${API_URL}/api/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      } catch { /* silently fail */ }
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

        {/* Mobile image carousel — auto scrolling right to left */}
        <div className="lg:hidden overflow-hidden mb-8 -mx-4">
          <div className="flex gap-4" style={{ width: 'max-content', animation: 'marquee 15s linear infinite' }}>
            {[
              { src: '/pc-image.png', alt: 'Project preview' },
              { src: '/lemtech-flag.png', alt: 'LemiTech' },
              { src: '/left-side-mobile-screen.png', alt: 'Mobile App' },
              { src: '/pc-image.png', alt: 'Project preview' },
              { src: '/lemtech-flag.png', alt: 'LemiTech' },
              { src: '/left-side-mobile-screen.png', alt: 'Mobile App' },
            ].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-52 h-36 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Flag image — desktop only */}
        <Reveal direction="zoom" duration={900} delay={200}>
          <div className="hidden lg:block max-w-lg mx-auto w-full rounded-2xl overflow-hidden bg-gray-900 aspect-video border border-gray-800 hover:scale-[1.02] transition-transform duration-300">
            <img src="/lemtech-flag.png" alt="LemiTech Flag" className="w-full h-full object-cover"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
        </Reveal>
      </div>

      {/* Stats Bar */}
      <Reveal direction="up" duration={700} delay={0}>
        <div className="w-full py-12 px-4 sm:px-6 border-t border-gray-200 dark:border-[#282e39]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '20+', label: 'Projects Delivered', icon: 'rocket_launch', gradient: 'from-blue-500 to-cyan-400' },
              { value: '15+', label: 'Happy Clients', icon: 'sentiment_very_satisfied', gradient: 'from-violet-500 to-purple-400' },
              { value: '4+', label: 'Years Experience', icon: 'calendar_today', gradient: 'from-emerald-500 to-teal-400' },
              { value: '2', label: 'Office Locations', icon: 'location_on', gradient: 'from-orange-500 to-amber-400' },
            ].map((stat, i) => (
              <div key={i} className="group flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-1`}>
                  <span className="material-symbols-outlined text-white text-[20px]">{stat.icon}</span>
                </div>
                <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>{stat.value}</span>
                <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

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
                { name: 'Novar Software', logo: '/logos/org2.png' },
                { name: 'LemiTech Solutions', logo: '/logos/org3.png' },
                { name: 'PolyTech', logo: '/logos/org4.png' },
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

      {/* What You Get Section */}
      <Reveal direction="up" duration={800} delay={0}>
        <div className="w-full py-20 px-4 sm:px-6 border-t border-gray-200 dark:border-[#282e39]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

            {/* Top: Problem statement centered */}
            <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">Why LemiTech</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Great ideas deserve<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">better execution.</span>
              </h2>
              <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed">
                Most businesses have the vision but struggle to find a technical partner who truly gets it — one that moves fast, builds right, and doesn't drain your budget. That's exactly the gap LemiTech was built to fill.
              </p>
            </div>

            {/* Bottom: 4 cards horizontal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: 'bolt',
                  title: 'Speed Without Compromise',
                  desc: 'We ship fast — without cutting corners on quality, security, or scalability.',
                  gradient: 'from-blue-500 to-cyan-400',
                },
                {
                  icon: 'precision_manufacturing',
                  title: 'Engineered for Your Problem',
                  desc: 'No templates, no copy-paste. Every solution is architected around your specific challenge.',
                  gradient: 'from-violet-500 to-purple-400',
                },
                {
                  icon: 'groups',
                  title: 'A Team That Thinks With You',
                  desc: 'We collaborate, challenge, and co-create with you from day one.',
                  gradient: 'from-emerald-500 to-teal-400',
                },
                {
                  icon: 'trending_up',
                  title: 'Built to Scale',
                  desc: 'From MVP to enterprise-grade — products that grow with your business without rebuilding.',
                  gradient: 'from-orange-500 to-amber-400',
                },
              ].map((item, i) => (
                <div key={i} className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-400 hover:-translate-y-2 min-h-[260px] justify-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-white text-[26px]">{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h4>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Reveal>

      {/* Testimonials */}
      <Reveal direction="up" duration={800} delay={0}>
        <div className="w-full py-20 px-4 sm:px-6 border-t border-gray-200 dark:border-[#282e39]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">What Clients Say</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Trusted by builders &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">visionaries</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "LemiTech delivered our platform faster than any agency we've worked with — and the quality was outstanding.",
                  name: 'Endurance Youth',
                  role: 'Organization Partner',
                  gradient: 'from-blue-500 to-cyan-400',
                },
                {
                  quote: "They don't just build software, they understand your business. That's rare and incredibly valuable.",
                  name: 'PolyTech',
                  role: 'Academic Partner',
                  gradient: 'from-violet-500 to-purple-400',
                },
                {
                  quote: "From idea to launch in weeks. The team is sharp, responsive, and genuinely invested in your success.",
                  name: 'Novar Software',
                  role: 'Technology Partner',
                  gradient: 'from-emerald-500 to-teal-400',
                },
              ].map((t, i) => (
                <div key={i} className="group flex flex-col gap-5 p-7 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-400 hover:-translate-y-2">
                  {/* Quote mark */}
                  <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${t.gradient} leading-none`}>"</div>
                  <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-md`}>
                      <span className="material-symbols-outlined text-white text-[18px]">person</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                      <p className="text-xs text-slate-400 dark:text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* CTA Banner */}
      <Reveal direction="up" duration={800} delay={0}>
        <div className="w-full px-4 sm:px-6 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 p-12 text-center shadow-2xl shadow-blue-500/30">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '30px 30px' }}></div>
              <div className="relative z-10 flex flex-col items-center gap-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Ready to build something<br />remarkable?
                </h2>
                <p className="text-white/80 text-lg max-w-xl">
                  Let's turn your idea into a product people love. Tell us what you're building.
                </p>
                <a
                  href="mailto:tlemesagirma@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-black px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  Start a Conversation
                </a>
              </div>
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
