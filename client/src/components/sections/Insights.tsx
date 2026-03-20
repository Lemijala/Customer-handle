import { useState } from 'react';
import type { InsightsSectionData } from '../../types/insights';
import { defaultInsightsData } from '../../types/insights';
import Reveal from '../common/Reveal';

const Insights = () => {
  const [data] = useState<InsightsSectionData>(defaultInsightsData);
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-gradient-to-l from-purple-500/5 to-pink-400/5 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-b from-cyan-500/3 to-transparent rounded-full blur-2xl animate-float"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.08) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center w-full">
        {/* Hero Section - Enhanced */}
        <section className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-surface-dark min-h-[400px] flex items-center justify-center text-center p-6 md:p-8 lg:p-16">
              {/* Animated background */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-20 animate-gradient-shift"
                  style={{ 
                    backgroundImage: 'radial-gradient(#135bec 1px, transparent 1px)', 
                    backgroundSize: '32px 32px',
                    backgroundPosition: '0% 50%',
                    animation: 'gradient-shift 15s ease infinite',
                    backgroundRepeat: 'repeat'
                  }}
                ></div>
                {/* Floating particles */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-[2px] h-[2px] bg-primary/30 rounded-full animate-float-subtle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float-subtle ${3 + Math.random() * 7}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
              
              <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6 animate-slide-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider animate-slide-up group/tag">
                  <span className="material-symbols-outlined text-base animate-pulse-subtle group-hover/tag:rotate-12 transition-transform duration-300">lightbulb</span>
                  <span>{data.hero.tagline}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] group/hero">
                  {data.hero.title.split(' ').map((word, i) => (
                    <span 
                      key={i}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-blue-600 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-400 animate-gradient-shift transform group-hover/hero:translate-y-[-2px] transition-transform duration-300"
                      style={{animationDelay: `${i * 0.1}s`}}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl font-light animate-slide-up group/desc" style={{animationDelay: '0.1s'}}>
                  {data.hero.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Published Writing Grid - Enhanced */}
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center justify-between mb-8 group/title animate-slide-in">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 text-blue-500 group-hover/title:scale-110 group-hover/title:rotate-6 transition-all duration-300">
                  <span className="material-symbols-outlined !text-[20px]">article</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Published Writing</h2>
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.articles.map((article, index) => (
                <Reveal key={article.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 120} duration={1200}>
                <article 
                  onMouseEnter={() => setHoveredArticle(article.id)}
                  onMouseLeave={() => setHoveredArticle(null)}
                  className="group relative overflow-hidden bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 animate-slide-up cursor-pointer"
                  style={{
                    transform: hoveredArticle === article.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Glow border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                  
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
                  
                  <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${article.image}')` }}
                      data-alt={`${article.title} thumbnail`}
                    ></div>
                    
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 transform group-hover:translate-y-0 transition-transform duration-300">
                      <span className="material-symbols-outlined text-sm animate-pulse-subtle group-hover:rotate-12 transition-transform duration-300">{article.sourceIcon}</span>
                      {article.source}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1 p-5 gap-3 relative z-10">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">{article.date}</span>
                      <span className="size-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse-subtle"></span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-500">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold leading-tight group-hover:text-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 transform group-hover:translate-x-2 transition-transform duration-500">
                      {article.excerpt}
                    </p>
                    
                    <div className="pt-2 relative">
                      <button className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:gap-3 transition-all duration-300 relative group/read">
                        Read Article 
                        <span className="material-symbols-outlined text-base transition-all duration-300 group-hover/read:rotate-45 group-hover/read:scale-125">
                          arrow_right_alt
                        </span>
                        {/* Animated underline */}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/read:w-full transition-all duration-700"></span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Principles - Enhanced */}
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 bg-gray-50 dark:bg-surface-dark/50 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="mb-8 md:mb-10 text-center md:text-left animate-slide-in">
              <div className="flex items-center gap-3 mb-2 group/title">
                <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 text-green-500 group-hover/title:scale-110 group-hover/title:rotate-6 transition-all duration-300">
                  <span className="material-symbols-outlined !text-[20px]">psychology</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Engineering Principles</h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl animate-slide-up group/desc" style={{animationDelay: '0.1s'}}>
                Core philosophies that guide my technical decision making and team leadership style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.principles.map((principle, index) => (
                <Reveal key={principle.id} direction="up" delay={index * 150} duration={1200}>
                <div 
                  onMouseEnter={() => setHoveredPrinciple(principle.id)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                  className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-500 group animate-slide-up transform hover:-translate-y-2"
                  style={{
                    transform: hoveredPrinciple === principle.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                  
                  {/* Icon with pulse animation */}
                  <div className="relative mb-4">
                    <div className="size-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center text-green-500 group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-green-600 group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {principle.icon}
                      </span>
                    </div>
                    
                    {/* Icon glow */}
                    <div className="absolute inset-0 size-12 rounded-lg bg-gradient-to-br from-green-500/30 to-green-600/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-400 transition-colors duration-300 transform group-hover:translate-x-1">
                    {principle.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4 transform group-hover:translate-x-2 transition-transform duration-500">
                    {principle.description}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {principle.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:from-gray-700 dark:group-hover:to-gray-800 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-300 hover:scale-105 transform group-hover:-translate-y-0.5"
                        style={{animationDelay: `${tagIndex * 0.05}s`}}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Progress line */}
                  <div className="mt-4 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400 group-hover:w-full transition-all duration-700 rounded-full"></div>
                  
                  {/* Floating dots */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Insights;