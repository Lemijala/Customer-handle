// File path: src/components/sections/About.tsx

import { useState } from 'react';
import type { AboutSectionData } from '../../types/about';
import { defaultAboutData } from '../../types/about';
import Reveal from '../common/Reveal';

const journeySteps = [
  {
    id: 1,
    year: '2021',
    title: 'Haramaya University Creativity Recognition',
    description: 'Recognized for outstanding creativity and innovation at Haramaya University — the spark that ignited the entrepreneurial journey.',
    icon: 'emoji_events',
    color: 'from-yellow-500 to-amber-400',
    side: 'left',
  },
  {
    id: 2,
    year: '2022',
    title: 'Eastern Ethiopia Inter-University Cursor Hackathon',
    description: 'Organized the first inter-university hackathon in Eastern Ethiopia, bringing together developers and innovators from across the region.',
    icon: 'code',
    color: 'from-blue-500 to-cyan-400',
    side: 'right',
  },
  {
    id: 3,
    year: '2022',
    title: 'Model United Nations Organizer',
    description: 'Led and organized a Model United Nations conference, developing leadership, diplomacy, and large-scale event management skills.',
    icon: 'public',
    color: 'from-green-500 to-emerald-400',
    side: 'left',
  },
  {
    id: 4,
    year: '2023',
    title: 'Contractual Works',
    description: 'Took on professional contractual software projects, delivering real-world solutions for clients and building a strong portfolio.',
    icon: 'handshake',
    color: 'from-purple-500 to-violet-400',
    side: 'right',
  },
  {
    id: 5,
    year: '2024–Now',
    title: 'Growing Up Company — LemiTech',
    description: 'Founded and growing LemiTech into Ethiopia\'s leading software development studio, delivering innovative digital products at scale.',
    icon: 'rocket_launch',
    color: 'from-primary to-blue-600',
    side: 'left',
  },
];

const About = () => {
  const [data] = useState<AboutSectionData>(defaultAboutData);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  return (
    <section id="about" className="relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white w-full overflow-x-hidden">
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
      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 py-8 lg:py-12 xl:py-16">

        {/* Company Intro */}
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col items-center text-center mb-16 lg:mb-24 pb-16 border-b border-gray-200 dark:border-gray-800">
            {/* Text centered */}
            <div className="flex flex-col gap-6 items-center max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">Who We Are</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Story</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                LemiTech is a software development studio. We design and build custom web platforms, mobile applications, and digital products that help businesses grow, scale, and compete in the modern world.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Founded by a team of passionate engineers and creatives, we combine deep technical expertise with a genuine understanding of the World market — delivering solutions that are not just functional, but transformative.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4 w-full">
                {[
                  { value: '4+', label: 'Years Experience' },
                  { value: '20+', label: 'Projects Delivered' },
                  { value: '2', label: 'Office Locations' },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-1 items-center">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{value}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image below text, centered */}
            <div className="relative w-full max-w-lg mt-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-200 dark:border-gray-800">
                <img src="/lemtech-flag.png" alt="LemiTech" className="w-full h-48 lg:h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="LemiTech Logo" className="w-10 h-10 rounded-xl object-cover" />
                    <div className="text-left">
                      <p className="text-white font-bold text-lg">LemiTech</p>
                      <p className="text-white/70 text-sm">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-500/30">
                Est. 2021
              </div>
            </div>
          </div>
        </Reveal>

        {/* Activities Gallery */}
        <Reveal direction="up" duration={700} delay={100}>
          <div className="mb-16 lg:mb-24">
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">In Action</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white">Our Activities</h2>
            </div>
            {/* Mobile: auto-scroll carousel */}
            <div className="md:hidden overflow-hidden -mx-3">
              <div className="flex gap-3 py-4" style={{ width: 'max-content', animation: 'marquee 12s linear infinite' }}>
                {[
                  { src: '/p1.jpg', label: 'Team at Work' },
                  { src: '/p2.jpg', label: 'Building Together' },
                  { src: '/p3.jpg', label: 'Our Community' },
                  { src: '/p4.jpg', label: 'Our Activities' },
                  { src: '/p5.jpeg', label: 'Our Activities' },
                  { src: '/p6.jpg', label: 'Our Activities' },
                  { src: '/p1.jpg', label: 'Team at Work' },
                  { src: '/p2.jpg', label: 'Building Together' },
                  { src: '/p3.jpg', label: 'Our Community' },
                  { src: '/p4.jpg', label: 'Our Activities' },
                  { src: '/p5.jpeg', label: 'Our Activities' },
                  { src: '/p6.jpg', label: 'Our Activities' },
                ].map((photo, i) => (
                  <div key={i} className="flex-shrink-0 w-44 h-32 rounded-2xl overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg">
                    <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: hover expand gallery */}
            <div
              className="hidden md:flex justify-center items-center py-6 overflow-x-auto scrollbar-hide"
              onMouseEnter={() => setIsGalleryExpanded(true)}
              onMouseLeave={() => { setIsGalleryExpanded(false); setHoveredPhoto(null); }}
            >
              <div className={`flex items-end transition-all duration-500 ease-in-out ${isGalleryExpanded ? 'gap-3' : ''}`}>
                {[
                  { src: '/p1.jpg', label: 'Team at Work' },
                  { src: '/p2.jpg', label: 'Building Together' },
                  { src: '/p3.jpg', label: 'Our Community' },
                  { src: '/p4.jpg', label: 'Our Activities' },
                  { src: '/p5.jpeg', label: 'Our Activities' },
                  { src: '/p6.jpg', label: 'Our Activities' },
                ].map((photo, i) => {
                  const isHovered = hoveredPhoto === i;
                  return (
                    <div
                      key={i}
                      className="relative flex-shrink-0 cursor-pointer"
                      onMouseEnter={() => setHoveredPhoto(i)}
                      onMouseLeave={() => setHoveredPhoto(null)}
                      style={{
                        marginLeft: isGalleryExpanded ? 0 : i === 0 ? 0 : '-1.2rem',
                        zIndex: isHovered ? 50 : isGalleryExpanded ? 1 : i,
                        width: isHovered ? '300px' : isGalleryExpanded ? '220px' : '72px',
                        height: isHovered ? '380px' : isGalleryExpanded ? '280px' : '72px',
                        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${isGalleryExpanded ? i * 60 : 0}ms`,
                      }}
                    >
                      <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl">
                        <img src={photo.src} alt={photo.label} className="w-full h-full object-cover transition-transform duration-500" style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }} />
                      </div>
                      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 rounded-b-xl transition-opacity duration-300 ${isGalleryExpanded ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-white text-xs font-semibold text-center truncate">{photo.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
        </div>

        {/* Core Values - full width centered */}
        <section className="flex flex-col gap-10 items-center text-center mt-16 group/values">
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">What Drives Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Values</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base lg:text-lg max-w-xl">
              The principles that shape every decision, every line of code, and every product we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
            {data.coreValues.map((value, index) => {
              const gradients = [
                'from-blue-500 to-cyan-400',
                'from-violet-500 to-purple-400',
                'from-emerald-500 to-teal-400',
                'from-orange-500 to-amber-400',
              ];
              const glows = [
                'shadow-blue-500/20 hover:shadow-blue-500/40',
                'shadow-violet-500/20 hover:shadow-violet-500/40',
                'shadow-emerald-500/20 hover:shadow-emerald-500/40',
                'shadow-orange-500/20 hover:shadow-orange-500/40',
              ];
              const bgGlows = [
                'group-hover:from-blue-500/10 group-hover:to-cyan-400/5',
                'group-hover:from-violet-500/10 group-hover:to-purple-400/5',
                'group-hover:from-emerald-500/10 group-hover:to-teal-400/5',
                'group-hover:from-orange-500/10 group-hover:to-amber-400/5',
              ];
              const grad = gradients[index % gradients.length];
              const glow = glows[index % glows.length];
              const bgGlow = bgGlows[index % bgGlows.length];

              return (
                <div
                  key={value.id}
                  onMouseEnter={() => setHoveredValue(value.id)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className={`group relative flex flex-col items-center text-center gap-4 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/50 p-8 shadow-xl ${glow} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                  style={{
                    transform: hoveredValue === value.id ? 'translateY(-8px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  {/* Animated bg glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${bgGlow} transition-all duration-500 rounded-2xl`}></div>

                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${grad} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="material-symbols-outlined text-white !text-[28px]">{value.icon}</span>
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <span className={`text-xs font-black text-transparent bg-clip-text bg-gradient-to-r ${grad}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="font-bold text-gray-900 dark:text-white text-xl">{value.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{value.description}</p>
                  </div>

                  {/* Bottom progress bar */}
                  <div className="relative z-10 w-full h-0.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mt-2">
                    <div className={`h-full bg-gradient-to-r ${grad} rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Journey Roadmap */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up" duration={700} delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">My Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
              The Journey So Far
            </h2>
          </div>
        </Reveal>

        {/* Road */}
        <div className="relative">
          {/* Center vertical line — desktop only */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20 rounded-full hidden md:block" />
          {/* Left line — mobile only */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20 rounded-full md:hidden" />

          <div className="flex flex-col gap-0">
            {journeySteps.map((step, index) => (
              <Reveal
                key={step.id}
                direction={step.side === 'left' ? 'left' : 'right'}
                duration={700}
                delay={index * 100}
              >
                {/* Desktop: alternating layout */}
                <div className={`relative hidden md:flex items-center gap-6 mb-12 ${step.side === 'right' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${step.side === 'right' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white dark:bg-[#162032] border border-gray-200 dark:border-[#282e39] rounded-2xl p-5 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 max-w-sm ${step.side === 'right' ? 'ml-auto' : ''}`}>
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1 block">{step.year}</span>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900`}>
                      <span className="material-symbols-outlined text-white text-[22px]">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-black flex items-center justify-center shadow-md">
                      {String(step.id).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="flex-1" />
                </div>

                {/* Mobile: compact left-aligned */}
                <div className="relative flex md:hidden items-start gap-4 mb-8 pl-2">
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900`}>
                      <span className="material-symbols-outlined text-white text-[16px]">{step.icon}</span>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-white dark:bg-[#162032] border border-gray-200 dark:border-[#282e39] rounded-2xl p-4 shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-full bg-gradient-to-r ${step.color} text-white`}>{step.year}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Reveal direction="up" duration={700} delay={0}>
          <div className="flex flex-col items-center gap-2 mb-12">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">The People</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Team</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base lg:text-lg max-w-xl text-center">
              The minds behind every product we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Lemesa Girma',
                role: 'Co-Founder & CEO',
                bio: 'Strategic leader and Engineering Lead, with expertise in technology and business development.',
                email: 'tlemesagirma@gmail.com',
                photo: '/p3.jpg',
              },
              { name: 'Bruk Hayal', role: 'Co-Founder', bio: 'Passionate builder driving innovation and growth.', email: '', photo: null },
              { name: 'Kasawun Tesfaye', role: 'Lead Developer', bio: 'Full-stack engineer crafting scalable digital products.', email: '', photo: null },
              { name: 'Bezawit Tadese', role: 'Designer', bio: 'Creative mind behind every pixel and user experience.', email: '', photo: null },
            ].map((member, i) => (
              <div key={i} className="group relative flex flex-col items-center text-center bg-white dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Photo */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-blue-400 text-4xl">person</span>
                      </div>
                    )}
                  </div>
                  {i === 0 && (
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                      CEO
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{member.name}</h3>
                <p className="text-blue-500 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">{member.bio}</p>

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;