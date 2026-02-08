// File path: src/components/sections/Hero.tsx

import { useState, useEffect } from 'react';
import { Persona, TechStackItem, DashboardMetric, defaultPersonas, defaultTechStack, defaultMetrics } from '../../types/hero';

const Hero = () => {
  const [personas, setPersonas] = useState<Persona[]>(defaultPersonas);
  const [techStack] = useState<TechStackItem[]>(defaultTechStack);
  const [metrics] = useState<DashboardMetric[]>(defaultMetrics);
  const [activePersona, setActivePersona] = useState<number>(1);
  const [hoveredPersona, setHoveredPersona] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Replace this URL with your actual profile picture
  const profilePictureUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
        <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow opacity-30"></div>
        <div className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/10 via-indigo-500/10 to-teal-500/10 rounded-full blur-3xl animate-float-slow-delayed opacity-30"></div>
        
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
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Column: Hero Text & CTAs */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-10 lg:space-y-12">
            {/* Persona Toggle with enhanced animation */}
            <div className="inline-flex p-1 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10 rounded-2xl backdrop-blur-lg shadow-2xl shadow-black/30 group/persona">
              <div className="relative flex items-center">
                {/* Animated background */}
                <div 
                  className="absolute h-9 md:h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl transition-all duration-500 ease-out shadow-lg shadow-blue-500/30"
                  style={{
                    width: `${100 / personas.length}%`,
                    transform: `translateX(${personas.findIndex(p => p.isActive) * 100}%)`
                  }}
                ></div>
                
                {personas.map((persona) => (
                  <button
                    key={persona.id}
                    data-persona={persona.id}
                    onClick={() => handlePersonaClick(persona.id)}
                    onMouseEnter={() => setHoveredPersona(persona.id)}
                    onMouseLeave={() => setHoveredPersona(null)}
                    className={`relative z-10 px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      persona.isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {persona.name}
                    {/* Hover indicator */}
                    {hoveredPersona === persona.id && !persona.isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500/50 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

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
                  
                  {/* Profile Picture with circular border radius */}
                  <div 
                    className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full border-4 border-white/10 bg-cover bg-center shadow-2xl shadow-black/50 group-hover/profile-pic:scale-110 group-hover/profile-pic:border-gradient-to-r group-hover/profile-pic:from-blue-500 group-hover/profile-pic:to-cyan-400 transition-all duration-500 overflow-hidden"
                    style={{ backgroundImage: `url('${profilePictureUrl}')` }}
                  >
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
                  <div className="flex items-center gap-2 md:gap-3 text-gradient-to-r from-blue-400 to-cyan-400 font-medium tracking-wide text-xs md:text-sm lg:text-base uppercase animate-gradient group/availability mb-3 md:mb-4">
                    <span className="material-symbols-outlined text-base md:text-lg lg:text-xl animate-pulse">
                      verified
                    </span>
                    <span className="relative">
                      Available for Contract
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/availability:w-full transition-all duration-700"></span>
                    </span>
                  </div>
                  
                  {/* Name with enhanced animations */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.9] tracking-tight group/name mb-3 md:mb-4">
                    <span className="text-white relative inline-block">
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
                      Senior Systems Architect
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
              <p className="text-gray-300 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl xl:max-w-3xl transform group-hover/desc:translate-x-3 transition-transform duration-500">
                Architecting scalable systems and delivering robust code. Specialized in high-performance cloud infrastructure, distributed systems, and enterprise-grade full-stack applications.
              </p>
            </div>

            {/* Enhanced CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto pt-4 md:pt-6">
              {/* Primary CTA */}
              <button className="group/primary relative w-full sm:w-auto bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 hover:from-blue-600 hover:via-blue-500 hover:to-cyan-500 text-white text-base md:text-lg font-bold h-12 md:h-14 px-8 md:px-10 rounded-xl transition-all duration-500 flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-0.5">
                {/* Button glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover/primary:opacity-100 transition-opacity duration-500 rounded-xl -z-10"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/primary:translate-x-full transition-transform duration-1000 rounded-xl"></div>
                <span>View Portfolio</span>
                <span className="material-symbols-outlined text-xl md:text-2xl transition-all duration-500 group-hover/primary:translate-x-2 group-hover/primary:rotate-12">
                  arrow_forward
                </span>
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover/primary:opacity-100 transition-opacity duration-300">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-white/50 animate-float"
                      style={{
                        left: `${10 + i * 15}%`,
                        top: '20%',
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1s'
                      }}
                    ></div>
                  ))}
                </div>
              </button>
              
              {/* Secondary CTA */}
              <button className="group/secondary w-full sm:w-auto bg-gradient-to-r from-gray-800/80 to-gray-900/80 hover:from-gray-700/80 hover:to-gray-800/80 border border-white/10 text-white text-base md:text-lg font-medium h-12 md:h-14 px-6 md:px-8 rounded-xl transition-all duration-500 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-white/10 transform hover:-translate-y-0.5">
                <span className="material-symbols-outlined text-xl md:text-2xl transition-transform duration-500 group-hover/secondary:scale-110 group-hover/secondary:-translate-y-1">
                  download
                </span>
                <span>Strategy Deck</span>
                {/* Animated border */}
                <div className="absolute -inset-1 border border-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl opacity-0 group-hover/secondary:opacity-100 transition-opacity duration-500 -z-10"></div>
              </button>
              
              {/* Tertiary CTA */}
              <button className="group/tertiary w-full sm:w-auto flex items-center justify-center gap-2 text-gray-400 hover:text-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-all duration-500 px-4 md:px-6 py-2 md:py-3">
                <span className="material-symbols-outlined text-xl md:text-2xl transition-transform duration-500 group-hover/tertiary:rotate-12">
                  calendar_month
                </span>
                <span className="font-medium text-sm md:text-base lg:text-lg transform group-hover/tertiary:translate-x-1 transition-transform duration-300">
                  Schedule Chat
                </span>
                {/* Underline effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/tertiary:w-full transition-all duration-700"></div>
              </button>
            </div>
          </div>

          {/* Right Column: Live Metrics Dashboard with premium effects */}
          <div className="flex-1 w-full lg:w-auto transform transition-transform duration-300"
            style={{
              transform: `translate(${mousePosition.x * -0.003}px, ${mousePosition.y * -0.003}px)`
            }}
          >
            <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-900/30 to-gray-800/40 backdrop-blur-xl rounded-3xl p-1 shadow-2xl shadow-black/40 overflow-hidden group/dashboard border border-white/10 hover:border-gradient-to-r hover:from-blue-500/30 hover:to-cyan-400/30 transition-all duration-500 transform hover:-translate-y-1">
              {/* Dashboard glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover/dashboard:opacity-100 blur-2xl transition-opacity duration-500 -z-10"></div>
              
              {/* Animated header */}
              <div className="bg-gradient-to-r from-black/40 to-black/30 px-5 md:px-6 py-3 md:py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse"></div>
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <div className="h-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1 md:mx-2"></div>
                  <span className="text-gradient-to-r from-blue-500 to-cyan-400 text-[10px] md:text-xs uppercase tracking-widest font-mono animate-gradient">
                    Live System Status
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

              <div className="p-5 md:p-6 lg:p-7 grid gap-5 md:gap-6 lg:gap-7">
                {/* Metric 1: Uptime */}
                <div className="group/uptime flex items-center justify-between p-4 md:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/10 hover:border-gradient-to-r hover:from-blue-500/40 hover:to-cyan-400/40 transition-all duration-500 transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
                    <div className="relative">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-blue-500/30 flex items-center justify-center text-gradient-to-r from-blue-500 to-cyan-400 group-hover/uptime:scale-110 transition-all duration-300 shadow-xl shadow-blue-500/10">
                        <span className="material-symbols-outlined text-xl md:text-2xl lg:text-3xl">dns</span>
                        {/* Icon shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/uptime:translate-x-full transition-transform duration-700 rounded-xl"></div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                    </div>
                    <div>
                      <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-1">System Uptime</div>
                      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white font-mono group-hover/uptime:text-gradient-to-r group-hover/uptime:from-blue-500 group-hover/uptime:to-cyan-400 transition-all duration-300">
                        99.98%
                      </div>
                    </div>
                  </div>
                  {/* Animated bar chart */}
                  <div className="h-10 md:h-12 w-24 md:w-32 flex items-end gap-1 md:gap-1.5 group-hover/uptime:scale-105 transition-transform duration-300">
                    {[40, 70, 50, 90, 80, 100].map((height, i) => (
                      <div 
                        key={i}
                        className="w-2 md:w-2.5 bg-gradient-to-b from-blue-500/20 via-blue-500/60 to-cyan-400 rounded-t-sm group-hover/uptime:from-blue-500 group-hover/uptime:via-blue-400 group-hover/uptime:to-cyan-400 transition-all duration-300"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${i * 100}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Metric 2: GitHub Activity */}
                <div className="group/github p-4 md:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/10 hover:border-gradient-to-r hover:from-blue-500/40 hover:to-cyan-400/40 transition-all duration-500 transform hover:-translate-y-0.5">
                  <div className="flex justify-between items-end mb-4 md:mb-5 lg:mb-6">
                    <div>
                      <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-1">GitHub Contributions</div>
                      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white font-mono group-hover/github:text-gradient-to-r group-hover/github:from-blue-500 group-hover/github:to-cyan-400 transition-all duration-300">
                        3,450+
                      </div>
                    </div>
                    <span className="text-gradient-to-r from-blue-500 to-cyan-400 text-xs md:text-sm font-bold bg-gradient-to-r from-blue-500/10 to-cyan-400/10 px-3 py-1.5 rounded-full border border-blue-500/20 shadow-lg shadow-blue-500/10 group-hover/github:scale-110 transition-all duration-300">
                      +12% vs last mo
                    </span>
                  </div>
                  
                  {/* Enhanced Contribution Graph */}
                  <div className="flex gap-1 justify-between opacity-90 group-hover/github:opacity-100 transition-opacity duration-300 group/graph">
                    <div className="grid grid-rows-4 grid-flow-col gap-1 w-full h-16 md:h-20">
                      {generateGitHubGraph()}
                    </div>
                  </div>
                </div>

                {/* Metric 3: Projects & Satisfaction */}
                <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  {/* Projects Card */}
                  <div className="group/projects p-4 md:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/10 hover:border-gradient-to-r hover:from-blue-500/40 hover:to-cyan-400/40 transition-all duration-500 transform hover:-translate-y-0.5 flex flex-col justify-between">
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Projects</div>
                    <div className="mt-2 md:mt-3 flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover/projects:text-gradient-to-r group-hover/projects:from-blue-500 group-hover/projects:to-cyan-400 transition-all duration-300">
                        15
                      </span>
                      <span className="text-gray-500 text-sm md:text-base transform group-hover/projects:translate-x-2 transition-transform duration-500">
                        Delivered
                      </span>
                    </div>
                    {/* Animated progress bar */}
                    <div className="relative w-full bg-white/10 rounded-full h-1.5 md:h-2 mt-3 md:mt-4 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out w-0 group-hover/projects:w-[85%]"></div>
                      {/* Progress glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-sm opacity-0 group-hover/projects:opacity-100 transition-opacity duration-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Satisfaction Card */}
                  <div className="group/satisfaction p-4 md:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/10 hover:border-gradient-to-r hover:from-green-500/40 hover:to-emerald-400/40 transition-all duration-500 transform hover:-translate-y-0.5 flex flex-col justify-between">
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
                    <div className="mt-2 md:mt-3 flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover/satisfaction:text-gradient-to-r group-hover/satisfaction:from-green-500 group-hover/satisfaction:to-emerald-400 transition-all duration-300">
                        100
                      </span>
                      <span className="text-gradient-to-r from-green-500 to-emerald-400 text-sm md:text-base font-bold">%</span>
                    </div>
                    <div className="flex -space-x-1.5 md:-space-x-2 mt-3 md:mt-4 opacity-80 group-hover/satisfaction:opacity-100 transition-opacity duration-300">
                      {['bg-gradient-to-br from-gray-700 to-gray-900', 
                        'bg-gradient-to-br from-gray-600 to-gray-800', 
                        'bg-gradient-to-br from-gray-500 to-gray-700',
                        'bg-gradient-to-br from-gray-800 to-gray-900'].map((gradient, i) => (
                        <div 
                          key={i}
                          className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border-2 border-gray-900 ${gradient} flex items-center justify-center text-[8px] md:text-[10px] text-white shadow-lg group-hover/satisfaction:scale-110 transition-all duration-300`}
                          style={{ 
                            transitionDelay: `${i * 100}ms`,
                            zIndex: 4 - i
                          }}
                        >
                          {i === 3 ? '+5' : ''}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet Decor with animation */}
              <div className="bg-gradient-to-r from-black/60 to-black/40 px-5 md:px-6 py-3 md:py-4 border-t border-white/10 font-mono text-xs md:text-sm text-gray-400 overflow-hidden group/code">
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
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex items-center gap-10 md:gap-12 lg:gap-16 xl:gap-20 animate-marquee-slower whitespace-nowrap">
              {duplicatedTechStack.map((tech, index) => (
                <div
                  key={`${tech.id}-${index}`}
                  className="flex items-center gap-3 md:gap-4 text-gray-400 font-mono text-lg md:text-xl lg:text-2xl font-bold group/tech transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className={`material-symbols-outlined text-xl md:text-2xl lg:text-3xl ${tech.color} group-hover/tech:scale-110 group-hover/tech:rotate-12 transition-all duration-300`}>
                    {tech.icon}
                  </span>
                  <span className="group-hover/tech:text-gradient-to-r group-hover/tech:from-blue-500 group-hover/tech:to-cyan-400 transition-all duration-300">
                    {tech.name}
                  </span>
                  {/* Tech indicator */}
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 animate-pulse"></div>
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