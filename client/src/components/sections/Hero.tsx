// File path: src/components/sections/Hero.tsx

import { useState, useEffect } from 'react';
import type { Persona, TechStackItem, DashboardMetric } from '../../types/hero';
import { defaultPersonas, defaultTechStack, defaultMetrics } from '../../types/hero';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface LiveStats {
  uptime: string;
  totalMessages: number;
  memoryUsage: string;
  cpuLoad: string;
  dbStatus: string;
  processUptime: number;
  nodeVersion: string;
  platform: string;
  timestamp: string;
}

const Hero = () => {
  const [personas, setPersonas] = useState<Persona[]>(defaultPersonas);
  const [techStack] = useState<TechStackItem[]>(defaultTechStack);
  const [metrics] = useState<DashboardMetric[]>(defaultMetrics);
  const [activePersona, setActivePersona] = useState<number>(1);
  const [liveStats, setLiveStats] = useState<LiveStats | null>(null);
  const [ghRepos, setGhRepos] = useState<number | null>(null);
  const [hoveredPersona, setHoveredPersona] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Fetch real stats from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${API_URL}/api/stats`);
        const data = await res.json();
        if (data.success) setLiveStats(data.data);
      } catch {
        // silently fail — dashboard shows fallback values
      }
    };
    fetchStats();
    const interval = setInterval(fetchStats, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  // Profile picture — served from /public/profile.jpg
  const profilePictureUrl = "/profile.png";

  // Fetch GitHub repo count
  useEffect(() => {
    fetch('https://api.github.com/users/Lemijala')
      .then(r => r.json())
      .then(d => { if (d.public_repos != null) setGhRepos(d.public_repos); })
      .catch(() => {});
  }, []);

      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePersonaClick = (id: number) => {
    setPersonas(personas.map(p => ({
      ...p,
      isActive: p.id === id
    })));
    setActivePersona(id);
    
    // Add animation effect
    const button = document.querySelector(`[data-persona="${id}"]`);
    if (button) {
      button.classList.add('persona-click');
      setTimeout(() => button.classList.remove('persona-click'), 300);
    }
  };

  // Generate GitHub contribution graph with animation
  const generateGitHubGraph = () => {
    const cells = [];
    const intensities = [5, 20, 60, 5, 40, 100, 5, 20, 5, 80, 40, 5, 20, 5, 60, 100, 100, 40, 5, 20, 5, 60, 100, 5, 20, 80, 5, 40, 60, 5, 20, 100];
    
    for (let i = 0; i < 32; i++) {
      let bgClass = 'bg-white/5 group-hover/graph:bg-white/10';
      if (intensities[i] > 75) bgClass = 'bg-gradient-to-b from-blue-500 to-cyan-400 group-hover/graph:from-blue-400 group-hover/graph:to-cyan-300';
      else if (intensities[i] > 50) bgClass = 'bg-gradient-to-b from-blue-500/80 to-cyan-400/80 group-hover/graph:from-blue-400/80 group-hover/graph:to-cyan-300/80';
      else if (intensities[i] > 25) bgClass = 'bg-gradient-to-b from-blue-500/40 to-cyan-400/40 group-hover/graph:from-blue-400/40 group-hover/graph:to-cyan-300/40';
      else if (intensities[i] > 10) bgClass = 'bg-gradient-to-b from-blue-500/20 to-cyan-400/20 group-hover/graph:from-blue-400/20 group-hover/graph:to-cyan-300/20';

      cells.push(
        <div 
          key={i} 
          className={`rounded-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] ${bgClass}`}
          style={{
            animationDelay: `${i * 50}ms`,
            animationDuration: '0.5s'
          }}
        ></div>
      );
    }
    
    return cells;
  };

  // Duplicate tech stack for seamless animation
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

  return (
    <section id="home" className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow opacity-30 pointer-events-none select-none"></div>
        <div className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/10 via-indigo-500/10 to-teal-500/10 rounded-full blur-3xl animate-float-slow-delayed opacity-30 pointer-events-none select-none"></div>
        
        {/* Particle system */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated grid with parallax */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.02] "></div>
        
        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-light-beam"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-light-beam-delayed"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-20 overflow-hidden w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Column: Hero Text & CTAs */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-10 lg:space-y-12">
            {/* Hero Content with Profile Picture */}
            <div className="space-y-4 md:space-y-6 w-full transform transition-transform duration-300"
              style={{
                transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
              }}
            >
              {/* Profile Picture with Availability Badge */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 lg:gap-8">
                {/* Profile Picture Container */}
                <div className="relative group/profile-pic">
                  {/* Outer glow effect */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover/profile-pic:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Profile Picture */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full border-4 border-white/10 shadow-xl group-hover/profile-pic:scale-110 transition-all duration-500 overflow-hidden">
                    <img
                      src={profilePictureUrl}
                      alt="Lemesa Girma"
                      className="w-full h-full object-cover"
                    />
                    {/* Image shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/profile-pic:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Online status indicator */}
                  <div className="absolute bottom-3 right-3 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 border-2 border-gray-900 shadow-lg shadow-green-500/50 animate-pulse"></div>
                  
                  {/* Floating particles around picture */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover/profile-pic:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-float"
                        style={{
                          left: `${10 + i * 15}%`,
                          top: `${15 + i * 10}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${3 + i * 0.5}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Name and Title Section */}
                <div className="flex-1">
                  {/* Availability Badge */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                      Open to Opportunities
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Remote / Addis Ababa
                    </div>
                  </div>
                  
                  {/* Name with enhanced animations */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.9] tracking-tight group/name mb-3 md:mb-4">
                    <span className="text-slate-900 dark:text-white relative inline-block">
                      Lemesa
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/name:w-full transition-all duration-1000 ease-out"></span>
                    </span>{' '}
                    <span className="text-gradient-to-r from-gray-400 via-gray-300 to-gray-400 animate-gradient-x relative inline-block">
                      Girma
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover/name:w-full transition-all duration-1000 ease-out delay-200"></span>
                    </span>
                  </h1>
                  
                  {/* Title and Education */}
                  <div className="space-y-2 md:space-y-3 group/title">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 animate-gradient-x">
                      Senior Software Developer
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 font-normal transform group-hover/title:translate-x-2 transition-transform duration-500">
                      &amp; IT Student @ Haramaya University
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description with animated border */}
            <div className="relative pl-5 md:pl-6 lg:pl-8 border-l-3 md:border-l-4 border-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent py-1 group/desc">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <p className="text-slate-600 dark:text-gray-300 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl xl:max-w-3xl transform group-hover/desc:translate-x-3 transition-transform duration-500">
                Building production-grade web applications and APIs. Specialized in React, Node.js, cloud infrastructure, and turning complex problems into clean, maintainable solutions.
              </p>
            </div>

            {/* Enhanced CTA Group */}
            <div className="flex flex-col gap-4">
              {/* Currently building */}
              <div className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-[14px] text-blue-500 animate-spin" style={{animationDuration:'3s'}}>settings</span>
                <span>Currently building: <span className="text-slate-700 dark:text-gray-300 font-medium">AI-powered logistics platform</span></span>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
              {/* Resume Download */}
              <a
                href="/resume.pdf"
                download="Lemesa_Girma_Resume.pdf"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="material-symbols-outlined text-[18px] relative z-10">download</span>
                <span className="relative z-10 text-sm md:text-base">Resume</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Lemijala"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span className="text-sm md:text-base">GitHub</span>
              </a>
            </div>
            </div>
          </div>

          {/* Right Column: Live Metrics Dashboard with premium effects */}
          <div className="flex-1 w-full lg:w-auto transform transition-transform duration-300"
            style={{
              transform: `translate(${mousePosition.x * -0.003}px, ${mousePosition.y * -0.003}px)`
            }}
          >
            <div className="relative bg-card-light dark:bg-[#0f1623]/80 backdrop-blur-xl rounded-3xl p-1 shadow-md dark:shadow-2xl shadow-black/10 overflow-hidden group/dashboard border border-gray-200 dark:border-primary/10 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-1">
              {/* Dashboard glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover/dashboard:opacity-100 blur-2xl transition-opacity duration-500 -z-10"></div>
              
              {/* Animated header */}
              <div className="bg-gray-100 dark:bg-[#0d1420] px-5 md:px-6 py-3 md:py-4 border-b border-gray-200 dark:border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse"></div>
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <div className="h-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1 md:mx-2"></div>
                  <span className="text-gradient-to-r from-blue-500 to-cyan-400 text-[10px] md:text-xs uppercase tracking-widest font-mono animate-gradient">
                    {ghRepos != null ? `${ghRepos} GitHub Repos` : 'Skills & Stats'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 opacity-0 group-hover/dashboard:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '3+', label: 'Years Exp', icon: 'workspace_premium', color: 'from-blue-500 to-cyan-400' },
                    { value: liveStats?.totalMessages != null ? String(liveStats.totalMessages) : '∞', label: 'Messages', icon: 'mail', color: 'from-purple-500 to-pink-400' },
                    { value: '20+', label: 'Projects', icon: 'rocket_launch', color: 'from-orange-500 to-amber-400' },
                  ].map(({ value, label, icon, color }) => (
                    <div key={label} className="flex flex-col items-center gap-1 p-3 rounded-xl bg-gray-50 dark:bg-[#162032]/80 border border-gray-200 dark:border-white/5 group/stat hover:scale-105 transition-transform duration-300">
                      <span className={`material-symbols-outlined text-[20px] bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{icon}</span>
                      <span className="text-xl font-black font-mono text-slate-900 dark:text-white">{value}</span>
                      <span className="text-[9px] uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Skill bars */}
                <div className="space-y-2.5">
                  {[
                    { skill: 'React / TypeScript', pct: 92, color: 'from-blue-500 to-cyan-400' },
                    { skill: 'Node.js / Express', pct: 88, color: 'from-green-500 to-emerald-400' },
                    { skill: 'MongoDB / PostgreSQL', pct: 80, color: 'from-purple-500 to-violet-400' },
                    { skill: 'Docker / Cloud', pct: 72, color: 'from-orange-500 to-amber-400' },
                  ].map(({ skill, pct, color }) => (
                    <div key={skill} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300">{skill}</span>
                        <span className="text-[11px] font-bold font-mono text-gray-500 dark:text-gray-400">{pct}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${color} rounded-full animate-expand-width shadow-sm`}
                          style={{ width: `${pct}%`, animationDuration: '1.2s', animationFillMode: 'both' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet Decor with animation */}
              <div className="bg-gray-100 dark:bg-[#0d1420] px-5 md:px-6 py-3 md:py-4 border-t border-gray-200 dark:border-primary/10 font-mono text-xs md:text-sm text-gray-500 dark:text-gray-400 overflow-hidden group/code">
                <div className="whitespace-nowrap animate-marquee-slow">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">skills</span>{' '}
                  <span className="text-gray-500">=</span>{' '}
                  <span className="text-gray-500">[</span>
                  <span className="text-green-400 group-hover/code:text-gradient-to-r group-hover/code:from-green-500 group-hover/code:to-emerald-400 transition-all duration-300">'React'</span>
                  <span className="text-gray-500">,</span>{' '}
                  <span className="text-green-400 group-hover/code:text-gradient-to-r group-hover/code:from-green-500 group-hover/code:to-emerald-400 transition-all duration-300">'Node'</span>
                  <span className="text-gray-500">,</span>{' '}
                  <span className="text-green-400 group-hover/code:text-gradient-to-r group-hover/code:from-green-500 group-hover/code:to-emerald-400 transition-all duration-300">'AWS'</span>
                  <span className="text-gray-500">];</span>{' '}
                  <span className="text-gray-600">// Ready to deploy</span>
                  {' '}
                  <span className="material-symbols-outlined text-blue-500/50 text-sm ml-2 group-hover/code:translate-x-2 transition-transform duration-300">
                    bolt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tech Stack Ticker with advanced effects */}
        <div className="w-full mt-10 md:mt-12 lg:mt-16 xl:mt-20 relative group/ticker">
          {/* Animated separator */}
          <div className="relative w-full h-px mb-6 md:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover/ticker:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/ticker:opacity-100 transition-opacity duration-500 animate-ping"></div>
          </div>
          
          <div className="w-full mb-3 md:mb-4">
            <p className="text-xs md:text-sm font-bold text-gradient-to-r from-gray-500 via-gray-400 to-gray-500 uppercase tracking-widest text-center lg:text-left animate-gradient group/title">
              Powering Solutions With
            </p>
          </div>
          
          <div className="w-full overflow-hidden relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 animate-marquee-slower" style={{ whiteSpace: 'nowrap', willChange: 'transform' }}>
              {duplicatedTechStack.map((tech, index) => (
                <div
                  key={`${tech.id}-${index}`}
                  className="inline-flex items-center gap-2 sm:gap-3 text-gray-400 font-mono text-sm sm:text-base md:text-lg lg:text-xl font-bold group/tech flex-shrink-0 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className={`material-symbols-outlined text-base sm:text-lg md:text-xl lg:text-2xl ${tech.color} group-hover/tech:scale-110 group-hover/tech:rotate-12 transition-all duration-300`}>
                    {tech.icon}
                  </span>
                  <span className="group-hover/tech:text-white transition-all duration-300">
                    {tech.name}
                  </span>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-40 flex-shrink-0"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Animated background for ticker */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover/ticker:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;