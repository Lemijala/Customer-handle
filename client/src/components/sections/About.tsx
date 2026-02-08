// File path: src/components/sections/About.tsx

import { useState } from 'react';
import { AboutSectionData, defaultAboutData } from '../../types/about';

const About = () => {
  const [data] = useState<AboutSectionData>(defaultAboutData);
  const [hoveredMethodology, setHoveredMethodology] = useState<number | null>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <section id="about" className="relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-manrope w-full overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-gradient-to-l from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-b from-blue-500/3 to-transparent rounded-full blur-2xl animate-float"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.08) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
          }}
        ></div>
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 xl:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
          {/* Left Column: Main Narrative */}
          <main className="flex-1 flex flex-col gap-10 xl:gap-12 min-w-0">
            {/* Philosophy Section with enhanced animation */}
            <section className="flex flex-col gap-5 xl:gap-6 animate-slide-in">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                  <span className="text-blue-500 font-bold tracking-wider text-xs uppercase animate-gradient">
                    {data.philosophy.tagline}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white group">
                  Solving human problems with{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 animate-gradient-x">
                      elegant logic.
                    </span>
                    {/* Underline effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out"></span>
                    {/* Glow effect */}
                    <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -z-10"></span>
                  </span>
                </h1>
              </div>
              <div className="relative pl-5 xl:pl-6 border-l-3 xl:border-l-4 border-gradient-l group/quote hover:border-gradient-l-hover transition-all duration-500">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/quote:opacity-100 transition-opacity duration-300"></div>
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 leading-relaxed transform group-hover/quote:translate-x-2 transition-transform duration-300">
                  "{data.philosophy.quote}"
                </p>
                <div className="absolute -right-4 top-0 text-blue-500/20 text-4xl transform rotate-12 opacity-0 group-hover/quote:opacity-100 transition-all duration-500">
                  "
                </div>
              </div>
            </section>

            {/* 4D Methodology Framework with 3D effects */}
            <section className="flex flex-col gap-6 xl:gap-8">
              <div className="flex flex-col gap-2 group/title">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold flex items-center gap-3 relative">
                  <span className="flex items-center justify-center size-8 lg:size-9 xl:size-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 text-blue-500 group-hover/title:scale-110 group-hover/title:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/10">
                    <span className="material-symbols-outlined !text-[20px] lg:!text-[22px] xl:!text-[24px]">schema</span>
                  </span>
                  <span className="relative">
                    4D Methodology Framework
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/title:w-full transition-all duration-700"></span>
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl xl:max-w-4xl text-base lg:text-lg xl:text-xl transform group-hover/title:translate-x-2 transition-transform duration-300">
                  My cyclical process for engineering robust software solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">
                {data.methodology.map((item) => (
                  <div 
                    key={item.id}
                    onMouseEnter={() => setHoveredMethodology(item.id)}
                    onMouseLeave={() => setHoveredMethodology(null)}
                    className="group relative overflow-hidden rounded-xl xl:rounded-2xl bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-900/60 border border-gray-200/50 dark:border-gray-700/50 hover:border-gradient-to-r hover:from-blue-500/50 hover:to-cyan-400/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2"
                    style={{
                      transform: hoveredMethodology === item.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Glow border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-xl xl:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                    
                    {/* Step number glow */}
                    <div className="absolute -top-3 -left-3 size-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/50 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {item.step}
                    </div>
                    
                    {/* Image container with parallax effect */}
                    <div className="h-36 lg:h-40 xl:h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative">
                      <div 
                        className="w-full h-full bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url('${item.image}')` }}
                        data-alt={`${item.title} phase visualization`}
                      ></div>
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="p-5 lg:p-6 xl:p-7 relative z-10">
                      <div className="flex items-center justify-between mb-3 lg:mb-4">
                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white transform group-hover:translate-x-1 transition-transform duration-300">
                          {item.title}
                        </h3>
                        <span className="material-symbols-outlined text-gradient-to-r from-blue-500 to-cyan-400 text-xl lg:text-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                          {item.icon}
                        </span>
                      </div>
                      <p className="text-sm lg:text-base xl:text-lg text-gray-600 dark:text-gray-400 leading-relaxed transform group-hover:translate-x-2 transition-transform duration-500">
                        {item.description}
                      </p>
                      
                      {/* Animated progress indicator */}
                      <div className="mt-4 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                      </div>
                    </div>
                    
                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-500/50 to-cyan-400/50 animate-float"
                          style={{
                            left: `${10 + i * 10}%`,
                            top: `${20 + i * 5}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${3 + i * 0.5}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Values with diamond-like effects */}
            <section className="flex flex-col gap-6 xl:gap-8 group/values">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold flex items-center gap-3 relative">
                <span className="flex items-center justify-center size-8 lg:size-9 xl:size-10 rounded-lg bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-cyan-400/10 border border-blue-500/20 text-gradient-to-r from-blue-500 to-cyan-400 group-hover/values:animate-spin-slow group-hover/values:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  <span className="material-symbols-outlined !text-[20px] lg:!text-[22px] xl:!text-[24px]">diamond</span>
                </span>
                <span className="relative">
                  Core Values
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/values:w-full transition-all duration-700"></span>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">
                {data.coreValues.map((value) => (
                  <div 
                    key={value.id}
                    onMouseEnter={() => setHoveredValue(value.id)}
                    onMouseLeave={() => setHoveredValue(null)}
                    className="group relative overflow-hidden rounded-xl xl:rounded-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 border border-gray-200/50 dark:border-gray-700/50 hover:border-gradient-to-r hover:from-blue-500/30 hover:to-cyan-400/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-1"
                    style={{
                      transform: hoveredValue === value.id ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5"></div>
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
                        backgroundSize: '200% 200%',
                        animation: 'moveGradient 8s ease-in-out infinite'
                      }}></div>
                    </div>
                    
                    {/* Icon container with 3D effect */}
                    <div className="relative z-10 text-gradient-to-r from-blue-500 to-cyan-400 mb-2 lg:mb-3 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                      <div className="relative">
                        <span className="material-symbols-outlined !text-[28px] lg:!text-[30px] xl:!text-[32px] relative z-10">
                          {value.icon}
                        </span>
                        {/* Icon shadow/glow */}
                        <span className="absolute inset-0 text-gradient-to-r from-blue-500/40 to-cyan-400/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="material-symbols-outlined !text-[28px] lg:!text-[30px] xl:!text-[32px]">
                            {value.icon}
                          </span>
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="relative z-10 font-bold text-gray-900 dark:text-white text-lg lg:text-xl xl:text-2xl transform group-hover:translate-x-1 transition-transform duration-300">
                      {value.title}
                    </h3>
                    <p className="relative z-10 text-sm lg:text-base xl:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                    
                    {/* Animated connector line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-3/4 transition-all duration-500"></div>
                    
                    {/* Floating dots */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse" style={{animationDelay: '0s'}}></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Right Column: Sidebar with enhanced animations */}
          <aside className="w-full lg:w-[400px] xl:w-[420px] flex-shrink-0 flex flex-col gap-6 xl:gap-8">
            {/* Profile Summary with floating effect */}
            <div className="relative bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-800/95 dark:to-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl xl:rounded-2xl p-6 lg:p-7 xl:p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group transform hover:-translate-y-1">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-xl xl:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
              
              {/* Profile image with glow */}
              <div className="relative mb-4 lg:mb-5 xl:mb-6">
                <div 
                  className="size-24 lg:size-28 xl:size-32 rounded-full bg-cover bg-center ring-4 ring-white dark:ring-gray-900 group-hover:ring-8 transition-all duration-300 shadow-xl"
                  style={{ backgroundImage: `url('${data.profile.image}')` }}
                  data-alt="Portrait of Lemesa Girma"
                ></div>
                {/* Profile image glow */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 size-3 lg:size-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 ring-2 ring-white dark:ring-gray-900 animate-pulse shadow-lg shadow-green-500/50"></div>
              </div>
              
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-1 lg:mb-2 transform group-hover:scale-105 transition-transform duration-300">
                {data.profile.name}
              </h3>
              <p className="text-gradient-to-r from-blue-500 to-cyan-400 font-medium text-base lg:text-lg xl:text-xl mb-4 lg:mb-5 transform group-hover:translate-y-1 transition-transform duration-300">
                {data.profile.title}
              </p>
              
              {/* Animated separator */}
              <div className="relative w-full my-3 lg:my-4">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              
              <div className="w-full flex flex-col gap-3 lg:gap-4 mt-3 lg:mt-4 text-left">
                <div className="flex items-center gap-3 text-base lg:text-lg xl:text-lg text-gray-600 dark:text-gray-400 group/item hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                  <span className="material-symbols-outlined text-lg lg:text-xl xl:text-2xl text-blue-500/70 group-hover/item:text-blue-500 group-hover/item:scale-110 transition-all duration-300">
                    location_on
                  </span>
                  <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">
                    {data.profile.location}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-base lg:text-lg xl:text-lg text-gray-600 dark:text-gray-400 group/item hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                  <span className="material-symbols-outlined text-lg lg:text-xl xl:text-2xl text-blue-500/70 group-hover/item:text-blue-500 group-hover/item:scale-110 transition-all duration-300">
                    mail
                  </span>
                  <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">
                    {data.profile.email}
                  </span>
                </div>
              </div>
              
              {/* Animated button */}
              <button className="w-full mt-6 lg:mt-7 xl:mt-8 relative overflow-hidden flex items-center justify-center rounded-lg h-10 lg:h-12 xl:h-14 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white text-base lg:text-lg xl:text-xl font-bold transition-all duration-500 group/btn shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5">
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                {/* Button particles */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
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
                <span className="relative z-10">Contact Me</span>
                <span className="material-symbols-outlined ml-2 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:rotate-12 transition-all duration-300">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Education card with diploma animation */}
            <div className="bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-800/95 dark:to-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl xl:rounded-2xl p-6 lg:p-7 xl:p-8 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group">
              <h4 className="text-base lg:text-lg xl:text-xl font-bold uppercase tracking-wider text-gray-500 mb-4 lg:mb-5 xl:mb-6 flex items-center gap-2 lg:gap-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                <span className="material-symbols-outlined text-lg lg:text-xl xl:text-2xl text-green-500/70 group-hover:scale-110 group-hover:text-green-500 transition-all duration-300">
                  school
                </span>
                Education
              </h4>
              
              <div className="flex flex-col gap-2 lg:gap-3">
                <h5 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white transform group-hover:translate-x-1 transition-transform duration-300">
                  {data.education.institution}
                </h5>
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 transform group-hover:translate-x-2 transition-transform duration-500">
                  {data.education.degree}
                </p>
                <div className="mt-2 lg:mt-3 inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-sm lg:text-base xl:text-lg font-medium bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-400 w-fit transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
                  GPA: {data.education.gpa}
                </div>
              </div>
              
              {/* Animated graduation cap */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-green-500/30 text-3xl animate-bounce">
                  school
                </span>
              </div>
            </div>

            {/* Certifications with badge hover effects */}
            <div className="bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-800/95 dark:to-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl xl:rounded-2xl p-6 lg:p-7 xl:p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group">
              <h4 className="text-base lg:text-lg xl:text-xl font-bold uppercase tracking-wider text-gray-500 mb-4 lg:mb-5 xl:mb-6 flex items-center gap-2 lg:gap-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                <span className="material-symbols-outlined text-lg lg:text-xl xl:text-2xl text-purple-500/70 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-300">
                  verified
                </span>
                Certifications
              </h4>
              
              <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6">
                {data.certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 xl:p-5 rounded-lg xl:rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-gray-50/50 hover:to-gray-100/50 dark:hover:from-gray-700/30 dark:hover:to-gray-800/30 border border-transparent hover:border-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group/cert transform hover:-translate-x-1"
                  >
                    <div 
                      className="size-10 lg:size-12 xl:size-14 rounded-lg xl:rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shrink-0 group-hover/cert:scale-110 transition-all duration-300 shadow-lg group-hover/cert:shadow-xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${cert.iconColor}10 0%, ${cert.iconColor}05 100%)`,
                        border: `1px solid ${cert.iconColor}20`
                      }}
                    >
                      <span 
                        className="material-symbols-outlined text-lg lg:text-xl xl:text-2xl transform group-hover/cert:scale-125 group-hover/cert:rotate-12 transition-all duration-300"
                        style={{ 
                          color: cert.iconColor,
                          textShadow: `0 0 20px ${cert.iconColor}40`
                        }}
                      >
                        {cert.icon}
                      </span>
                      {/* Badge shine */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cert:translate-x-full transition-transform duration-700 rounded-lg xl:rounded-xl"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base lg:text-lg xl:text-xl font-bold text-gray-900 dark:text-white group-hover/cert:text-gradient-to-r group-hover/cert:from-purple-500 group-hover/cert:to-pink-500 transition-all duration-300">
                        {cert.title}
                      </span>
                      <span className="text-sm lg:text-base xl:text-lg text-gray-500 group-hover/cert:text-gray-600 dark:group-hover/cert:text-gray-300 transition-colors duration-300">
                        {cert.provider}
                      </span>
                    </div>
                    
                    {/* Verification check */}
                    <div className="ml-auto opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
                      <span className="material-symbols-outlined text-green-500 animate-pulse">
                        check_circle
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Recognition with trophy effects */}
            <div className="bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-800/95 dark:to-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 rounded-xl xl:rounded-2xl p-6 lg:p-7 xl:p-8 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 group">
              <h4 className="text-base lg:text-lg xl:text-xl font-bold uppercase tracking-wider text-gray-500 mb-4 lg:mb-5 xl:mb-6 flex items-center gap-2 lg:gap-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                <span className="material-symbols-outlined text-lg lg:text-xl xl:text-2xl text-yellow-500/70 group-hover:scale-110 group-hover:text-yellow-500 transition-all duration-300">
                  emoji_events
                </span>
                Recognition
              </h4>
              
              <ul className="flex flex-col gap-4 lg:gap-5 xl:gap-6">
                {data.recognitions.map((recognition) => (
                  <li 
                    key={recognition.id}
                    className={`relative pl-4 lg:pl-5 xl:pl-6 group/recognition ${
                      recognition.isHighlighted 
                        ? 'border-l-3 lg:border-l-4 border-gradient-to-b from-yellow-500 to-orange-400 hover:border-gradient-to-b hover:from-yellow-400 hover:to-orange-300' 
                        : 'border-l-3 lg:border-l-4 border-gray-300/50 dark:border-gray-600/50 hover:border-gradient-to-b hover:from-yellow-500/30 hover:to-orange-400/30'
                    } transition-all duration-300 transform hover:translate-x-1`}
                  >
                    {/* Trophy icon for highlighted items */}
                    {recognition.isHighlighted && (
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 size-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-400 flex items-center justify-center text-white text-xs shadow-lg shadow-yellow-500/50 opacity-0 group-hover/recognition:opacity-100 transition-opacity duration-300">
                        <span className="material-symbols-outlined text-xs">emoji_events</span>
                      </div>
                    )}
                    
                    <h5 className="text-base lg:text-lg xl:text-xl font-bold text-gray-900 dark:text-white group-hover/recognition:text-yellow-600 dark:group-hover/recognition:text-yellow-400 transition-colors duration-300">
                      {recognition.title}
                    </h5>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-500 group-hover/recognition:text-gray-600 dark:group-hover/recognition:text-gray-300 transition-colors duration-300">
                      {recognition.year} • {recognition.organization}
                    </p>
                    
                    {/* Sparkle effect for highlighted items */}
                    {recognition.isHighlighted && (
                      <div className="absolute -top-2 -right-2 opacity-0 group-hover/recognition:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-0.5">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1 h-1 rounded-full bg-gradient-to-br from-yellow-500 to-orange-400 animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;