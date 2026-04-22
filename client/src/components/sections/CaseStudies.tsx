// File path: src/components/sections/CaseStudies.tsx

import { useState } from 'react';
import Reveal from '../common/Reveal';

const projects = [
  {
    id: 1,
    name: 'Electronics Store',
    category: 'E-Commerce',
    description: 'A full-featured electronics e-commerce platform with product listings, cart management, order tracking, and an admin dashboard for inventory control.',
    image: '/projects/electronics.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-cyan-400',
    icon: 'devices',
    status: 'Live',
  },
  {
    id: 2,
    name: 'AgriConnect',
    category: 'Agriculture',
    description: 'A digital platform connecting farmers with buyers, providing real-time market prices, crop management tools, and supply chain tracking.',
    image: '/projects/agre.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Maps API'],
    gradient: 'from-emerald-500 to-teal-400',
    icon: 'agriculture',
    status: 'Live',
  },
  {
    id: 3,
    name: 'Bule Hora University',
    category: 'Education',
    description: 'A university management system handling student enrollment, course scheduling, grade management, and faculty administration.',
    image: '/projects/BU.png',
    tags: ['React', 'Express', 'MySQL', 'TypeScript'],
    gradient: 'from-violet-500 to-purple-400',
    icon: 'school',
    status: 'Live',
  },
  {
    id: 4,
    name: 'E-Commerce Platform',
    category: 'E-Commerce',
    description: 'A scalable multi-vendor e-commerce solution with payment integration, product management, and real-time order notifications.',
    image: '/projects/ecoemrce1.png',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
    gradient: 'from-orange-500 to-amber-400',
    icon: 'shopping_cart',
    status: 'Live',
  },
  {
    id: 5,
    name: 'Finance Manager',
    category: 'FinTech',
    description: 'A personal and business finance management app with expense tracking, budget planning, reports, and financial analytics dashboard.',
    image: '/projects/Finance.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    gradient: 'from-green-500 to-emerald-400',
    icon: 'account_balance',
    status: 'Live',
  },
  {
    id: 6,
    name: 'High School System',
    category: 'Education',
    description: 'A comprehensive school management platform covering student records, attendance tracking, exam results, and parent communication.',
    image: '/projects/highchool.png',
    tags: ['React', 'Django', 'SQLite', 'Tailwind CSS'],
    gradient: 'from-sky-500 to-blue-400',
    icon: 'menu_book',
    status: 'Live',
  },
  {
    id: 7,
    name: 'HiTech Electronics',
    category: 'E-Commerce',
    description: 'An electronics retail platform for HiTech, featuring product catalog, sales management, customer orders, and a point-of-sale system for in-store and online selling.',
    image: '/projects/HItech.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    gradient: 'from-pink-500 to-rose-400',
    icon: 'business',
    status: 'Live',
  },
  {
    id: 8,
    name: 'Hospital Management',
    category: 'Healthcare',
    description: 'A hospital information system managing patient records, appointment scheduling, doctor assignments, pharmacy, and billing.',
    image: '/projects/hospital.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    gradient: 'from-red-500 to-orange-400',
    icon: 'local_hospital',
    status: 'Live',
  },
  {
    id: 9,
    name: 'HUFMS',
    category: 'Fleet Management',
    description: 'Haramaya University Fleet Management System — managing university vehicles, driver assignments, trip scheduling, maintenance tracking, and fuel consumption reporting.',
    image: '/projects/HUFMS.png',
    tags: ['React', 'Express', 'PostgreSQL', 'TypeScript'],
    gradient: 'from-indigo-500 to-violet-400',
    icon: 'payments',
    status: 'Live',
  },
];

const CaseStudies = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="case-studies" className="relative bg-background-light dark:bg-background-dark text-slate-900 dark:text-white w-full overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.06) 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col items-center text-center gap-5 mb-16">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">Our Work</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight">
              Projects
            </h1>
            <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
              From web platforms to mobile apps — here's a look at what we've built for our clients. Real problems, real solutions, real impact.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
              <span className="text-blue-500 text-sm font-semibold">20+ projects delivered</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <Reveal key={project.id} direction="up" duration={700} delay={i * 100}>
              <div
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  transform: hovered === project.id ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Always visible overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    {project.status}
                  </div>
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </div>

                  {/* Hover overlay with content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-7">
                    <div className={`h-0.5 w-0 bg-gradient-to-r ${project.gradient} group-hover:w-16 transition-all duration-500 rounded-full mb-4`}></div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <span className="material-symbols-outlined text-white text-[18px]">{project.icon}</span>
                      </div>
                      <h3 className="font-black text-white text-xl">{project.name}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Tech tags removed */}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;

