// File path: src/components/sections/Skills.tsx

import { useState, useEffect } from 'react';
import type { SkillsSectionData } from '../../types/skills';
import { defaultSkillsData } from '../../types/skills';

const Skills = () => {
  const [data] = useState<SkillsSectionData>(defaultSkillsData);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredSkills, setFilteredSkills] = useState(defaultSkillsData.skills);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [activeProficiency, setActiveProficiency] = useState<number | null>(null);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredSkills(data.skills);
    } else {
      const filtered = data.skills.filter(skill => 
        filterIdToCategoryMap[activeFilter].includes(skill.category)
      );
      setFilteredSkills(filtered);
    }
  }, [activeFilter, data.skills]);

  const filterIdToCategoryMap: Record<string, string[]> = {
    all: ['cloud', 'frontend', 'backend', 'devops', 'database', 'tools'],
    cloud: ['cloud'],
    fullstack: ['frontend', 'backend'],
    devops: ['devops', 'tools'],
    database: ['database']
  };

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    // Add animation effect to filter button
    const button = document.querySelector(`[data-filter="${filterId}"]`);
    if (button) {
      button.classList.add('active-click');
      setTimeout(() => button.classList.remove('active-click'), 300);
    }
  };

  const handleSkillHover = (skillId: number) => {
    setHoveredSkill(skillId);
    setActiveProficiency(null);
  };

  const handleProficiencyHover = (proficiency: number) => {
    setActiveProficiency(proficiency);
  };

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
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header with enhanced animation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 lg:gap-6 pb-4 lg:pb-6 border-b border-border-dark/50 mb-6 lg:mb-8">
          <div className="flex flex-col gap-2 lg:gap-3 group/header">
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase animate-gradient">
                Technical Expertise
              </span>
            </div>
            <h1 className="text-slate-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight group-hover/header:translate-x-1 transition-transform duration-300">
              {data.title}
            </h1>
            <p className="text-slate-400 text-base lg:text-lg font-normal max-w-2xl lg:max-w-3xl border-l-2 border-blue-500/30 pl-4 py-1 transform group-hover/header:translate-x-2 transition-transform duration-500">
              {data.description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary-blue text-sm font-medium bg-gradient-to-r from-blue-500/10 to-blue-500/5 px-4 py-2 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-500/10 group/updated hover:shadow-blue-500/20 transition-all duration-300">
            <span className="material-symbols-outlined text-[18px] animate-pulse">verified</span>
            <span className="transform group-hover/updated:translate-x-1 transition-transform duration-300">
              Last Updated: {data.lastUpdated}
            </span>
            <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/updated:opacity-100 transition-opacity duration-300 animate-ping"></div>
          </div>
        </div>

        {/* Animated Filters */}
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 lg:gap-6 w-full">
            {data.filters.map((filter) => (
              <button
                key={filter.id}
                data-filter={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                className="group relative flex flex-col items-center justify-center pb-4 transition-all duration-300 w-full sm:w-auto"
              >
                {/* Animated background */}
                <div className={`absolute inset-0 rounded-xl -z-10 transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 shadow-lg shadow-blue-500/20' 
                    : 'bg-gray-100 dark:bg-surface-dark/50 hover:bg-gray-200 dark:hover:bg-surface-dark border border-gray-200 dark:border-border-dark/50'
                }`}></div>
                
                <div className="px-4 lg:px-6 py-2 lg:py-3">
                  <span className={`text-sm lg:text-base font-bold px-2 transition-all duration-300 relative ${
                    activeFilter === filter.id 
                      ? 'text-white bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent' 
                      : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                  }`}>
                    {filter.label}
                    {filter.count && (
                      <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full transition-all duration-300 ${
                        activeFilter === filter.id 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white' 
                          : 'bg-gray-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-gray-300 dark:group-hover:bg-slate-700 group-hover:text-slate-900 dark:group-hover:text-white'
                      }`}>
                        {filter.count}
                      </span>
                    )}
                  </span>
                </div>
                
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 h-[3px] w-full rounded-t-sm transition-all duration-500 ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                      : 'bg-transparent group-hover:bg-gray-300 dark:group-hover:bg-slate-700'
                  }`}
                ></span>
                
                {/* Glow effect on active */}
                {activeFilter === filter.id && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Leadership & Soft Skills Badges */}
        <div className="mb-6 lg:mb-8 flex flex-wrap gap-2">
          {[
            { icon: 'groups', label: 'Team Leadership', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' },
            { icon: 'architecture', label: 'System Design', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
            { icon: 'school', label: 'Mentoring', color: 'text-green-500 bg-green-500/10 border-green-500/20' },
            { icon: 'manage_accounts', label: 'Technical Leadership', color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20' },
            { icon: 'rate_review', label: 'Code Review', color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20' },
            { icon: 'hub', label: 'Cross-team Collaboration', color: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
          ].map(({ icon, label, color }) => (
            <span key={label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${color} transition-all duration-300 hover:scale-105`}>
              <span className="material-symbols-outlined text-[14px]">{icon}</span>
              {label}
            </span>
          ))}
        </div>

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

        {/* Enhanced Matrix Table — hidden on mobile, visible md+ */}
        <div className="hidden md:block bg-white dark:bg-[#162032] backdrop-blur-sm rounded-2xl xl:rounded-3xl border border-gray-200 dark:border-[#282e39] overflow-hidden shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-500 group/table">
          {/* Animated header glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover/table:opacity-100 transition-opacity duration-500"></div>
          
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full min-w-[800px] lg:min-w-[1000px] xl:min-w-[1200px] text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#0f1623] border-b border-gray-200 dark:border-[#282e39]">
                  <th className="px-6 lg:px-8 py-4 lg:py-5 text-xs font-bold text-slate-400 uppercase tracking-wider w-[25%] group/th">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-500/70 text-base">terminal</span>
                      <span className="relative">
                        Technology / Skill
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/th:w-full transition-all duration-700"></span>
                      </span>
                    </div>
                  </th>
                  <th className="px-6 lg:px-8 py-4 lg:py-5 text-xs font-bold text-slate-400 uppercase tracking-wider w-[30%] group/th">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-500/70 text-base">trending_up</span>
                      <span className="relative">
                        Proficiency
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/th:w-full transition-all duration-700"></span>
                      </span>
                    </div>
                  </th>
                  <th className="px-6 lg:px-8 py-4 lg:py-5 text-xs font-bold text-slate-400 uppercase tracking-wider w-[15%] group/th">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-500/70 text-base">schedule</span>
                      <span className="relative">
                        Experience
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/th:w-full transition-all duration-700"></span>
                      </span>
                    </div>
                  </th>
                  <th className="px-6 lg:px-8 py-4 lg:py-5 text-xs font-bold text-slate-400 uppercase tracking-wider w-[30%] group/th">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-500/70 text-base">database</span>
                      <span className="relative">
                        Scale Managed
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/th:w-full transition-all duration-700"></span>
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark/30">
                {filteredSkills.map((skill, index) => (
                  <tr 
                    key={skill.id}
                    onMouseEnter={() => handleSkillHover(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`group/row hover:bg-blue-50/50 dark:hover:bg-white/[0.02] transition-all duration-300 ${
                      index % 2 === 1 ? 'bg-gray-50/80 dark:bg-[#0f1623]/60' : ''
                    }`}
                    style={{
                      transform: hoveredSkill === skill.id ? 'translateY(-2px)' : 'translateY(0)',
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                  >
                    <td className="px-6 lg:px-8 py-4 lg:py-5">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className={`relative size-10 lg:size-12 rounded-xl bg-gradient-to-br from-[#1a1d24] to-[#151820] border border-border-dark/50 flex items-center justify-center group-hover/row:scale-110 group-hover/row:rotate-6 transition-all duration-300 ${skill.iconColor}`}>
                          <span className="material-symbols-outlined text-[22px] lg:text-[24px] relative z-10">
                            {skill.icon}
                          </span>
                          {/* Icon glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-900 dark:text-white text-sm lg:text-base font-bold group-hover/row:text-blue-400 transition-colors duration-300">
                            {skill.name}
                          </p>
                          <p className="text-slate-500 text-xs lg:text-sm group-hover/row:text-slate-400 transition-colors duration-300">
                            {skill.description}
                          </p>
                        </div>
                        {/* Category badge */}
                        <div className="hidden lg:flex">
                          <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-400 border border-blue-500/20">
                            {skill.category}
                          </span>
                        </div>
                      </div>
                    </td>
                    
                    <td 
                      className="px-6 lg:px-8 py-4 lg:py-5"
                      onMouseEnter={() => handleProficiencyHover(skill.proficiency)}
                      onMouseLeave={() => setActiveProficiency(null)}
                    >
                      <div className="flex flex-col gap-2 lg:gap-3">
                        <div className="flex justify-between text-xs lg:text-sm">
                          <span className="text-slate-900 dark:text-white font-medium group-hover/row:text-blue-300 transition-colors duration-300">
                            {skill.level}
                          </span>
                          <span className={`font-bold transition-all duration-500 ${
                            activeProficiency === skill.proficiency 
                              ? 'text-gradient-to-r from-blue-500 to-cyan-400 scale-110' 
                              : 'text-primary-blue'
                          }`}>
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="relative w-full h-2 lg:h-2.5 bg-slate-800/50 rounded-full overflow-hidden group/progress">
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: hoveredSkill === skill.id || activeProficiency === skill.proficiency 
                                ? `${skill.proficiency}%` 
                                : '0%',
                              transition: hoveredSkill === skill.id || activeProficiency === skill.proficiency 
                                ? 'width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
                                : 'none'
                            }}
                          ></div>
                          {/* Progress glow effect */}
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30 blur-md opacity-0 group-hover/progress:opacity-100 transition-opacity duration-300"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                        {/* Animated skill dots */}
                        <div className="flex gap-1 mt-1 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300">
                          {[...Array(Math.floor(skill.proficiency / 20))].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 lg:px-8 py-4 lg:py-5">
                      <div className="text-sm lg:text-base text-slate-700 dark:text-slate-300 font-mono bg-gray-100 dark:bg-[#0f1623] px-3 py-2 rounded-lg border border-gray-200 dark:border-[#282e39] group-hover/row:border-blue-500/30 group-hover/row:bg-blue-50 dark:group-hover/row:bg-blue-500/5 transition-all duration-300">
                        {skill.experience}
                      </div>
                    </td>
                    
                    <td className="px-6 lg:px-8 py-4 lg:py-5">
                      <div 
                        className={`inline-flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full border backdrop-blur-sm transition-all duration-300 group-hover/row:scale-105 group-hover/row:-translate-y-0.5 ${skill.scale.color}`}
                        style={{
                          boxShadow: hoveredSkill === skill.id 
                            ? `0 10px 30px ${skill.scale.color.split(' ')[2]?.replace('text-', '') || 'blue'}-500/20` 
                            : 'none'
                        }}
                      >
                        <span className={`material-symbols-outlined text-[18px] lg:text-[20px] ${skill.scale.color.split(' ')[2] || ''}`}>
                          {skill.scale.icon}
                        </span>
                        <span className={`text-xs lg:text-sm font-bold ${skill.scale.color.split(' ')[2] || ''}`}>
                          {skill.scale.label}
                        </span>
                        {/* Scale indicator glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r opacity-0 group-hover/row:opacity-20 -z-10 transition-opacity duration-300"
                          style={{
                            background: skill.scale.color.includes('text-green') 
                              ? 'linear-gradient(to right, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))' 
                              : skill.scale.color.includes('text-blue')
                              ? 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))'
                              : 'linear-gradient(to right, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.1))'
                          }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Animated table footer */}
          <div className="bg-gradient-to-r from-transparent via-blue-500/10 to-transparent px-6 lg:px-8 py-3 lg:py-4 border-t border-gray-200 dark:border-[#282e39] flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs lg:text-sm text-slate-500">
              <span className="material-symbols-outlined text-base text-blue-500/70">info</span>
              <span>Showing {filteredSkills.length} of {data.skills.length} skills</span>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover/table:opacity-100 transition-opacity duration-500">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        {/* end hidden md:block table wrapper */}

        {/* Enhanced Certifications Section */}
        <div className="flex flex-col gap-6 lg:gap-8 pt-8 lg:pt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-900 dark:text-white text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight group/title">
              <span className="relative inline-block">
                Professional Certifications
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/title:w-full transition-all duration-700"></span>
              </span>
            </h2>
            <div className="hidden lg:flex items-center gap-2 text-slate-500 text-sm bg-white dark:bg-[#162032] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#282e39]">
              <span className="material-symbols-outlined text-base text-green-500/70">verified</span>
              <span>All certifications are verified and current</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {data.certifications.map((cert) => (
              <div 
                key={cert.id}
                className="group/cert relative bg-white dark:bg-[#162032] rounded-2xl xl:rounded-3xl border border-gray-200 dark:border-[#282e39] p-5 lg:p-6 xl:p-7 flex flex-col gap-4 lg:gap-5 hover:border-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1"
              >
                {/* Certificate glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl xl:rounded-3xl opacity-0 group-hover/cert:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                
                <div className="flex items-start justify-between">
                  <div className={`relative size-12 lg:size-14 rounded-xl xl:rounded-2xl bg-gradient-to-br ${cert.gradientFrom} ${cert.gradientTo} flex items-center justify-center border ${cert.iconColor.replace('text', 'border')}/30 shadow-xl group-hover/cert:scale-110 group-hover/cert:rotate-3 transition-all duration-300`}>
                    <span className={`material-symbols-outlined text-[28px] lg:text-[32px] relative z-10 ${cert.iconColor}`}>
                      {cert.icon}
                    </span>
                    {/* Icon shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cert:translate-x-full transition-transform duration-700 rounded-xl xl:rounded-2xl"></div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-wide border backdrop-blur-sm transition-all duration-300 group-hover/cert:scale-110 ${
                    cert.status === 'Active' 
                      ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 border-green-500/20 shadow-lg shadow-green-500/10' 
                      : 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 border-blue-500/20 shadow-lg shadow-blue-500/10'
                  }`}>
                    {cert.status}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-slate-900 dark:text-white text-lg lg:text-xl xl:text-2xl font-bold group-hover/cert:text-gradient-to-r group-hover/cert:from-blue-400 group-hover/cert:to-cyan-300 transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm lg:text-base mt-1 lg:mt-2 transform group-hover/cert:translate-x-2 transition-transform duration-500">
                    {cert.subtitle}
                  </p>
                </div>
                
                <div className="pt-4 lg:pt-5 border-t border-gray-200 dark:border-[#282e39] mt-auto flex items-center justify-between group/footer">
                  <span className="text-xs lg:text-sm text-slate-500 group-hover/footer:text-slate-400 transition-colors duration-300">
                    Issued: {cert.issueDate}
                  </span>
                  <a 
                    href="#" 
                    className="flex items-center gap-1 lg:gap-2 text-primary-blue text-xs lg:text-sm font-bold group-hover/cert:underline relative"
                  >
                    <span className="transform group-hover/cert:translate-x-1 transition-transform duration-300">
                      Verify Credential
                    </span>
                    <span className="material-symbols-outlined text-[14px] lg:text-[16px] transform group-hover/cert:translate-x-2 transition-transform duration-500">
                      open_in_new
                    </span>
                    {/* Link hover effect */}
                    <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/cert:w-full transition-all duration-500"></div>
                  </a>
                </div>
                
                {/* Floating verification particles */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30 animate-float"
                      style={{
                        left: `${10 + i * 15}%`,
                        top: `${30 + i * 5}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;