// File path: src/components/sections/Artifacts.tsx

import { useState } from 'react';
import Reveal from '../common/Reveal';

const Artifacts = () => {
  const [hoveredRepo, setHoveredRepo] = useState<number | null>(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  const repos = [
    {
      id: 1,
      name: 'woyyuu-tech-portfolio',
      description: 'The source code for Woyyuu Tech\'s company portfolio — built with React, TypeScript, and Tailwind CSS.',
      language: 'TypeScript',
      langColor: 'bg-blue-500',
      stars: 12,
      forks: 4,
      gradient: 'from-blue-500 to-cyan-400',
      icon: 'code_blocks',
      url: 'https://github.com/Lemijala',
    },
    {
      id: 2,
      name: 'node-api-starter',
      description: 'A production-ready Node.js + Express REST API boilerplate with auth, validation, and Docker support.',
      language: 'JavaScript',
      langColor: 'bg-yellow-400',
      stars: 28,
      forks: 11,
      gradient: 'from-emerald-500 to-teal-400',
      icon: 'dns',
      url: 'https://github.com/Lemijala',
    },
    {
      id: 3,
      name: 'flutter-ui-kit',
      description: 'A reusable Flutter component library with clean, modern UI patterns for mobile app development.',
      language: 'Dart',
      langColor: 'bg-cyan-500',
      stars: 19,
      forks: 7,
      gradient: 'from-violet-500 to-purple-400',
      icon: 'phone_iphone',
      url: 'https://github.com/Lemijala',
    },
    {
      id: 4,
      name: 'hufms-backend',
      description: 'Backend API for Haramaya University Fleet Management System — built with Node.js and PostgreSQL.',
      language: 'TypeScript',
      langColor: 'bg-blue-500',
      stars: 8,
      forks: 3,
      gradient: 'from-orange-500 to-amber-400',
      icon: 'local_shipping',
      url: 'https://github.com/Lemijala',
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'Building Scalable REST APIs with Node.js and TypeScript',
      summary: 'A deep dive into structuring production-grade APIs — covering authentication, validation, error handling, and deployment.',
      tag: 'Backend',
      gradient: 'from-blue-500 to-cyan-400',
      icon: 'article',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Flutter vs React Native in 2025 — A Practical Comparison',
      summary: 'After building apps in both frameworks, here\'s an honest breakdown of performance, DX, and when to choose which.',
      tag: 'Mobile',
      gradient: 'from-violet-500 to-purple-400',
      icon: 'phone_iphone',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'How We Delivered a Hospital Management System in 8 Weeks',
      summary: 'The architecture decisions, team structure, and lessons learned from one of our most complex client projects.',
      tag: 'Case Study',
      gradient: 'from-emerald-500 to-teal-400',
      icon: 'local_hospital',
      readTime: '10 min read',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Endurance Youth Org',
      role: 'Partner Organization',
      quote: 'Woyyuu Tech delivered our platform faster than any agency we\'ve worked with. The quality and attention to detail was outstanding from day one.',
      initials: 'EY',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      name: 'PolyTech Institute',
      role: 'Academic Partner',
      quote: 'They don\'t just build software — they understand your business. That combination of technical depth and business thinking is rare.',
      initials: 'PT',
      gradient: 'from-violet-500 to-purple-400',
    },
    {
      id: 3,
      name: 'Novar Software',
      role: 'Technology Partner',
      quote: 'From idea to launch in weeks. The team is sharp, responsive, and genuinely invested in your success. Highly recommended.',
      initials: 'NS',
      gradient: 'from-emerald-500 to-teal-400',
    },
  ];

  return (
    <section id="artifacts" className="relative bg-background-light dark:bg-background-dark text-slate-900 dark:text-white w-full overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.06) 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">

        {/* Header */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">What We've Built & Shared</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight">
              Artifacts
            </h1>
            <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
              Open source work, technical writing, and client testimonials — a transparent look at how Woyyuu Tech builds and thinks.
            </p>
          </div>
        </Reveal>

        {/* Open Source Repos */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Open Source</h2>
              </div>
              <a href="https://github.com/Lemijala" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-blue-500 font-semibold hover:underline">
                View all on GitHub
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {repos.map((repo, i) => (
                <div
                  key={repo.id}
                  onMouseEnter={() => setHoveredRepo(repo.id)}
                  onMouseLeave={() => setHoveredRepo(null)}
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-400 cursor-pointer"
                  style={{
                    transform: hoveredRepo === repo.id ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${repo.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`}></div>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${repo.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <span className="material-symbols-outlined text-white text-[18px]">{repo.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 dark:text-white text-base">{repo.name}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`}></span>
                        <span className="text-xs text-slate-400">{repo.language}</span>
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-3 text-slate-400 text-xs">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">star</span>{repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">fork_right</span>{repo.forks}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{repo.description}</p>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer"
                    className={`self-start flex items-center gap-1 text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${repo.gradient}`}>
                    View on GitHub
                    <span className="material-symbols-outlined text-[14px] text-blue-500">open_in_new</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Tech Articles */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Technical Writing</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {articles.map((article, i) => (
                <div key={article.id} className="group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-400 hover:-translate-y-2 cursor-pointer">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${article.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-white text-[22px]">{article.icon}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${article.gradient} text-white`}>{article.tag}</span>
                    <span className="text-xs text-slate-400">{article.readTime}</span>
                  </div>
                  <h3 className="font-black text-slate-900 dark:text-white text-base leading-snug">{article.title}</h3>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{article.summary}</p>
                  <div className={`h-0.5 w-0 bg-gradient-to-r ${article.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Client Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  onMouseEnter={() => setHoveredTestimonial(t.id)}
                  onMouseLeave={() => setHoveredTestimonial(null)}
                  className="group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-400"
                  style={{
                    transform: hoveredTestimonial === t.id ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${t.gradient} leading-none`}>"</div>
                  <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-black shadow-md`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Artifacts;
