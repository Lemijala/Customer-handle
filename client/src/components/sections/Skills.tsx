// File path: src/components/sections/Skills.tsx

import { useState } from 'react';
import { defaultSkillsData } from '../../types/skills';

const Skills = () => {
  const [filteredSkills] = useState(defaultSkillsData.skills);

  return (
    <section id="skills" className="relative bg-background-light dark:bg-background-dark text-slate-900 dark:text-white w-full overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float-slow-delayed"></div>
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        {/* Grid Lines */}
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">






        {/* Mobile Card Grid — visible only on small screens */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white dark:bg-[#162032] backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-[#282e39] p-4 flex flex-col gap-3 shadow-lg"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <div className={`size-10 rounded-xl bg-gradient-to-br from-[#1a1d24] to-[#151820] border border-border-dark/50 flex items-center justify-center flex-shrink-0 ${skill.iconColor}`}>
                  <span className="material-symbols-outlined text-[20px]">{skill.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-slate-900 dark:text-white text-sm font-bold truncate">{skill.name}</p>
                  <p className="text-slate-500 text-xs truncate">{skill.description}</p>
                </div>
              </div>

              {/* Proficiency bar */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{skill.level}</span>
                  <span className="text-primary-blue font-bold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full"
                    style={{ width: `${skill.proficiency}%`, transition: 'width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                  ></div>
                </div>
              </div>

              {/* Experience + Scale badges */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs text-slate-600 dark:text-slate-300 font-mono bg-gray-100 dark:bg-slate-800/50 px-2 py-1 rounded-lg border border-gray-200 dark:border-slate-700/50">
                  {skill.experience}
                </span>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${skill.scale.color}`}>
                  <span className="material-symbols-outlined text-[14px]">{skill.scale.icon}</span>
                  {skill.scale.label}
                </div>
              </div>
            </div>
          ))}
        </div>




      </div>
    </section>
  );
};

export default Skills;