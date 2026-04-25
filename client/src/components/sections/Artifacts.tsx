// File path: src/components/sections/Artifacts.tsx

import Reveal from '../common/Reveal';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We build fast, scalable, and modern web platforms tailored to your business. From landing pages to full enterprise systems — clean, maintainable code that grows with you.',
    icon: 'web',
    gradient: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-blue-500/20',
    features: ['React / Next.js', 'Node.js & REST APIs', 'Database Design', 'Cloud Deployment'],
    side: 'left',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps built with Flutter and React Native. Smooth, native-feeling experiences for both iOS and Android — shipped fast.',
    icon: 'phone_iphone',
    gradient: 'from-violet-500 to-purple-400',
    shadow: 'shadow-violet-500/20',
    features: ['Flutter & Dart', 'React Native', 'iOS & Android', 'Push Notifications'],
    side: 'right',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that converts. We craft intuitive interfaces, design systems, and prototypes that make your product a pleasure to use.',
    icon: 'palette',
    gradient: 'from-pink-500 to-rose-400',
    shadow: 'shadow-pink-500/20',
    features: ['Figma Prototypes', 'Design Systems', 'User Research', 'Responsive Design'],
    side: 'left',
  },
  {
    id: 4,
    title: 'Backend & API Development',
    description: 'Robust server-side systems, microservices, and API integrations. We build the engine that powers your product — secure, fast, and scalable.',
    icon: 'dns',
    gradient: 'from-emerald-500 to-teal-400',
    shadow: 'shadow-emerald-500/20',
    features: ['REST & GraphQL APIs', 'Microservices', 'Authentication', 'Third-party Integrations'],
    side: 'right',
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    description: 'We set up and manage your cloud infrastructure, CI/CD pipelines, and deployment workflows so your team can ship faster with confidence.',
    icon: 'cloud',
    gradient: 'from-orange-500 to-amber-400',
    shadow: 'shadow-orange-500/20',
    features: ['AWS / Firebase', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Alerts'],
    side: 'left',
  },
  {
    id: 6,
    title: 'Technical Consulting',
    description: 'Not sure where to start? We help you plan your architecture, choose the right tech stack, and build a roadmap that fits your budget and timeline.',
    icon: 'lightbulb',
    gradient: 'from-indigo-500 to-violet-400',
    shadow: 'shadow-indigo-500/20',
    features: ['Architecture Review', 'Tech Stack Advice', 'Project Roadmap', 'Code Audit'],
    side: 'right',
  },
  {
    id: 7,
    title: 'Mentorship',
    description: 'We guide developers and entrepreneurs through their journey — from learning to build, to launching real products. One-on-one sessions tailored to your goals.',
    icon: 'school',
    gradient: 'from-cyan-500 to-blue-400',
    shadow: 'shadow-cyan-500/20',
    features: ['1-on-1 Sessions', 'Code Reviews', 'Career Guidance', 'Project Support'],
    side: 'left',
  },
];

const Artifacts = () => {
  const navigate = useNavigate();

  return (
    <section id="artifacts" className="relative bg-background-light dark:bg-background-dark text-slate-900 dark:text-white w-full overflow-x-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.06) 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">

        {/* Header */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">What We Offer</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Services</span>
            </h1>
            <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
              From idea to launch — we cover every layer of your digital product. Here's what we build and how we can help you grow.
            </p>
          </div>
        </Reveal>

        {/* Alternating service cards */}
        <div className="flex flex-col gap-12">
          {services.map((service, i) => (
            <Reveal key={service.id} direction={service.side === 'left' ? 'left' : 'right'} duration={700} delay={i * 60}>
              <div className={`flex flex-col ${service.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 group`}>

                {/* Icon block */}
                <div className={`flex-shrink-0 w-full md:w-64 lg:w-72 flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-gradient-to-br ${service.gradient} shadow-2xl ${service.shadow} group-hover:scale-105 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-white text-[56px]" style={{fontVariationSettings:"'FILL' 1"}}>{service.icon}</span>
                  <h3 className="font-black text-white text-xl text-center">{service.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((f, fi) => (
                      <span key={fi} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white border border-white/30">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Text block */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">{service.title}</h2>
                  <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed">{service.description}</p>
                  <button
                    onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`self-start flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300`}
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    Get Started
                  </button>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 p-12 text-center shadow-2xl shadow-blue-500/30">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '30px 30px' }}></div>
            <div className="relative z-10 flex flex-col items-center gap-5">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Ready to build something great?</h2>
              <p className="text-white/80 text-lg max-w-xl">Tell us what you need and we'll get back to you within 24 hours.</p>
              <button
                onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-black px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                Get in Touch
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Artifacts;
