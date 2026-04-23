// File path: src/components/sections/Skills.tsx

import Reveal from '../common/Reveal';

const roadmap = [
  {
    year: '2021',
    title: 'The Foundation',
    subtitle: 'Where it all began',
    description: 'Started building with core web technologies. Laid the groundwork in frontend development and UI design, delivering first client projects.',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Figma', 'Java'],
    icon: 'rocket_launch',
    gradient: 'from-blue-500 to-cyan-400',
    side: 'left',
    milestone: 'Company Founded',
  },
  {
    year: '2022',
    title: 'Going Full-Stack',
    subtitle: 'Backend & APIs',
    description: 'Expanded into server-side development. Built REST APIs, integrated databases, and started delivering end-to-end web platforms for clients.',
    tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Go'],
    icon: 'dns',
    gradient: 'from-violet-500 to-purple-400',
    side: 'right',
    milestone: 'First Enterprise Client',
  },
  {
    year: '2023',
    title: 'Cloud & Scale',
    subtitle: 'Infrastructure & DevOps',
    description: 'Adopted cloud-first architecture. Deployed production systems on AWS, containerized apps with Docker, and introduced CI/CD pipelines.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Go'],
    icon: 'cloud',
    gradient: 'from-emerald-500 to-teal-400',
    side: 'left',
    milestone: '10+ Projects Delivered',
  },
  {
    year: '2024',
    title: 'Mobile & AI',
    subtitle: 'Expanding capabilities',
    description: 'Launched mobile application development with Flutter and Dart, integrated AI-powered features, and graduated with B.Sc. in Information Technology.',
    tags: ['Flutter', 'Dart', 'React Native', 'Python', 'Firebase', 'OpenAI'],
    icon: 'phone_iphone',
    gradient: 'from-orange-500 to-amber-400',
    side: 'right',
    milestone: 'Mobile Division Launched',
  },
  {
    year: '2025–Now',
    title: 'Studio at Scale',
    subtitle: 'Growing LemiTech',
    description: 'Operating as a full-service software studio across web, mobile, and backend. Building complex platforms with a growing team across Ethiopia and beyond.',
    tags: ['Next.js', 'Go', 'Flutter', 'Dart', 'Java', 'TypeScript', 'Microservices'],
    icon: 'groups',
    gradient: 'from-pink-500 to-rose-400',
    side: 'left',
    milestone: '20+ Projects & Growing',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-background-light dark:bg-background-dark text-slate-900 dark:text-white w-full overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.06) 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">Our Journey</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Experience &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Growth</span>
            </h1>
            <p className="text-slate-500 dark:text-gray-400 text-lg max-w-xl leading-relaxed">
              Four years of building, shipping, and scaling — from a single developer to a full-service software studio.
            </p>
          </div>
        </Reveal>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/10 via-blue-500/40 to-blue-500/10 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/10 via-blue-500/40 to-blue-500/10 md:hidden" />

          <div className="flex flex-col gap-0">
            {roadmap.map((step, index) => (
              <Reveal
                key={index}
                direction={step.side === 'left' ? 'left' : 'right'}
                duration={700}
                delay={index * 100}
              >
                <div className={`relative hidden md:flex items-center gap-6 mb-16 ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content card */}
                  <div className={`flex-1 ${step.side === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block w-full max-w-md bg-white dark:bg-[#162032] border border-gray-200 dark:border-[#282e39] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 ${step.side === 'right' ? 'md:ml-auto' : ''}`}>
                      {/* Milestone badge */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-white text-xs font-bold mb-3 shadow-sm`}>
                        <span className="material-symbols-outlined text-[13px]">emoji_events</span>
                        {step.milestone}
                      </div>
                      <div className="flex flex-col gap-1 mb-3">
                        <span className={`text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>{step.year}</span>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white">{step.title}</h3>
                        <p className="text-sm font-semibold text-slate-400 dark:text-gray-500">{step.subtitle}</p>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-4">{step.description}</p>
                      {/* Tech tags */}
                      <div className={`flex flex-wrap gap-2 ${step.side === 'right' ? 'md:justify-end' : ''}`}>
                        {step.tags.map((tag, t) => (
                          <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex-shrink-0 hidden md:flex">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900`}>
                      <span className="material-symbols-outlined text-white text-[24px]">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-black flex items-center justify-center shadow-md">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Empty spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>

                {/* Mobile: compact left-aligned */}
                <div className="relative flex md:hidden items-start gap-4 mb-8 pl-2">
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900`}>
                      <span className="material-symbols-outlined text-white text-[16px]">{step.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-[#162032] border border-gray-200 dark:border-[#282e39] rounded-2xl p-4 shadow-md">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-full bg-gradient-to-r ${step.gradient} text-white`}>{step.year}</span>
                      <span className="text-xs text-slate-400">{step.milestone}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{step.title}</h3>
                    <p className="text-xs text-slate-400 mb-2">{step.subtitle}</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.tags.map((tag, t) => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-slate-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
