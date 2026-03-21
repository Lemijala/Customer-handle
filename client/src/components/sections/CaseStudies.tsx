// File path: src/components/sections/CaseStudies.tsx

import { useState } from 'react';
import type { CaseStudiesSectionData } from '../../types/case-studies';
import { defaultCaseStudiesData } from '../../types/case-studies';

const CaseStudies = () => {
  const [data] = useState<CaseStudiesSectionData>(defaultCaseStudiesData);
  const [hoveredCaseStudy, setHoveredCaseStudy] = useState<number | null>(null);
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  const renderBarChart = (before: number, after: number, beforeLabel: string, afterLabel: string) => {
    const beforePercentage = Math.min((before / 50) * 100, 100);
    const afterPercentage = Math.min((after / 50) * 100, 100);
    
    return (
      <div className="flex-1 flex items-end gap-6 lg:gap-8 px-4 h-32 lg:h-40 border-b border-gray-300 dark:border-gray-700/50 relative group/chart">
        {/* Animated Y-axis lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent opacity-0 group-hover/chart:opacity-100 transition-opacity duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            ></div>
          ))}
        </div>
        
        {/* Before Bar */}
        <div className="flex flex-col items-center flex-1 gap-2 group/bar">
          <span className="text-xs text-gray-500 font-mono mb-1 opacity-0 group-hover/bar:opacity-100 transform group-hover/bar:-translate-y-1 transition-all duration-300">
            {before}
          </span>
          <div className="relative w-full h-0 group-hover/bar:h-auto transition-all duration-700 ease-out" 
            style={{ height: `${beforePercentage}%` }}>
            <div 
              className="absolute bottom-0 w-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-sm transition-all duration-500 group-hover/bar:shadow-xl group-hover/bar:shadow-gray-700/30"
              style={{ height: `${beforePercentage}%` }}
            ></div>
          </div>
          <span className="text-[10px] lg:text-xs text-gray-500 font-medium mt-2 transform group-hover/bar:translate-y-1 transition-transform duration-300">
            {beforeLabel}
          </span>
        </div>
        
        {/* After Bar */}
        <div className="flex flex-col items-center flex-1 gap-2 group/bar">
          <span className="text-xs text-gradient-to-r from-blue-500 to-cyan-400 font-mono mb-1 font-bold opacity-100 transform group-hover/bar:-translate-y-1 transition-all duration-300">
            {after}
          </span>
          <div className="relative w-full h-0 group-hover/bar:h-auto transition-all duration-1000 ease-out" 
            style={{ height: `${afterPercentage}%` }}>
            <div 
              className="absolute bottom-0 w-full bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 rounded-t-sm transition-all duration-700 ease-out shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover/bar:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
              style={{ height: `${afterPercentage}%` }}
            ></div>
            {/* Bar glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-b from-blue-500/20 to-cyan-400/20 blur-lg opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500 rounded-t-sm -z-10"></div>
          </div>
          <span className="text-[10px] lg:text-xs text-slate-900 dark:text-white font-medium mt-2 transform group-hover/bar:translate-y-1 transition-transform duration-300">
            {afterLabel}
          </span>
        </div>
      </div>
    );
  };

  const renderLatencyChart = (beforeValue: number, afterValue: number, beforeLabel: string, afterLabel: string) => {
    return (
      <div className="flex-1 flex flex-col justify-center gap-6 lg:gap-8 px-2 relative group/chart">
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-0 group-hover/chart:opacity-100 transition-opacity duration-500">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/10 to-transparent"
              style={{ top: `${20 * i}%` }}
            ></div>
          ))}
        </div>
        
        {/* Comparison Bar: Before */}
        <div className="flex flex-col gap-2 group/bar">
          <div className="flex justify-between text-xs lg:text-sm mb-1">
            <span className="text-gray-500 font-medium transform group-hover/bar:translate-x-1 transition-transform duration-300">
              {beforeLabel}
            </span>
            <span className="text-gray-500 font-mono transform group-hover/bar:-translate-x-1 transition-transform duration-300">
              {beforeValue} Hours
            </span>
          </div>
          <div className="relative w-full bg-gray-200 dark:bg-gray-800/50 rounded-full h-2 lg:h-3 overflow-hidden group-hover/bar:shadow-lg group-hover/bar:shadow-gray-700/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 h-full rounded-full opacity-50 transition-all duration-700 group-hover/bar:w-0"></div>
            {/* Animated shrinking effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
        
        {/* Comparison Bar: After */}
        <div className="flex flex-col gap-2 group/bar">
          <div className="flex justify-between text-xs lg:text-sm mb-1">
            <span className="text-slate-900 dark:text-white font-medium transform group-hover/bar:translate-x-1 transition-transform duration-300">
              {afterLabel}
            </span>
            <span className="text-gradient-to-r from-blue-500 to-cyan-400 font-bold font-mono transform group-hover/bar:-translate-x-1 transition-transform duration-300">
              &lt; 100ms
            </span>
          </div>
          <div className="relative w-full bg-gray-200 dark:bg-gray-800/50 rounded-full h-2 lg:h-3 overflow-hidden group-hover/bar:shadow-lg group-hover/bar:shadow-blue-500/20 transition-all duration-300">
            <div className="relative h-full">
              <div 
                className="absolute h-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-1000 ease-out"
                style={{ width: '2%', minWidth: '10px' }}
              ></div>
              {/* Expanding pulse effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0 group-hover/bar:opacity-100 group-hover/bar:animate-ping transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        
        {/* Animated arrow showing reduction */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/chart:opacity-100 transition-opacity duration-500">
          <span className="material-symbols-outlined text-gradient-to-r from-blue-500 to-cyan-400 text-2xl lg:text-3xl animate-bounce">
            trending_down
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="case-studies" className="relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden py-8 lg:py-12 xl:py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-60 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow opacity-50"></div>
        <div className="absolute bottom-1/3 -right-60 w-[500px] h-[500px] bg-gradient-to-l from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow-delayed opacity-50"></div>
        
        {/* Network pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230ea5e9' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Page Header with Expert Animations */}
        <section className="flex flex-col gap-4 lg:gap-6 mb-10 lg:mb-12 xl:mb-16 group/header">
          <div className="flex flex-col gap-2 lg:gap-3">
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-gradient-to-r from-blue-500 to-cyan-400 font-bold tracking-wider text-xs lg:text-sm uppercase animate-gradient">
                {data.tagline}
              </span>
            </div>
            <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-[-0.033em] group-hover/header:translate-x-1 transition-transform duration-500">
              {data.title}
            </h1>
          </div>
          <div className="relative pl-5 lg:pl-6 border-l-3 lg:border-l-4 border-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent py-1 group/desc">
            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg xl:text-xl font-normal leading-relaxed max-w-3xl lg:max-w-4xl transform group-hover/desc:translate-x-2 transition-transform duration-500">
              {data.description}
            </p>
            {/* Animated quote mark */}
            <div className="absolute -right-4 -top-4 text-blue-500/10 text-4xl lg:text-5xl transform rotate-12 opacity-0 group-hover/desc:opacity-100 transition-all duration-700">
              "
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {data.caseStudies.map((caseStudy) => (
          <section 
            key={caseStudy.id}
            onMouseEnter={() => setHoveredCaseStudy(caseStudy.id)}
            onMouseLeave={() => setHoveredCaseStudy(null)}
            className="flex flex-col gap-6 lg:gap-8 rounded-3xl bg-white dark:bg-[#162032] border border-gray-200 dark:border-[#282e39] p-6 lg:p-8 xl:p-10 relative overflow-hidden group/case-study mb-8 lg:mb-12 xl:mb-16 shadow-2xl shadow-black/10 dark:shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1"
            style={{
              transform: hoveredCaseStudy === caseStudy.id ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover/case-study:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            
            {/* Background decoration with animation */}
            {caseStudy.backgroundDecoration && (
              <div 
                className={`absolute ${
                  caseStudy.backgroundDecoration.position === 'top-right' 
                    ? 'top-0 right-0' 
                    : 'bottom-0 left-0'
                } w-[600px] h-[600px] ${
                  caseStudy.backgroundDecoration.color === 'bg-primary-blue/10' 
                    ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
                    : 'bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                } rounded-full blur-3xl ${
                  caseStudy.backgroundDecoration.position === 'top-right'
                    ? '-translate-y-1/2 translate-x-1/2'
                    : 'translate-y-1/2 -translate-x-1/2'
                } pointer-events-none transition-transform duration-1000 group-hover/case-study:scale-110`}
              ></div>
            )}

            <div className="flex flex-wrap items-start justify-between gap-4 lg:gap-6 relative z-10">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                  {caseStudy.categories.map((category, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-gray-100 dark:bg-gradient-to-r dark:from-gray-700/80 dark:to-gray-800/80 border border-gray-300 dark:border-gray-600/50 text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-300 backdrop-blur-sm group-hover/case-study:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-0.5"
                    >
                      {category}
                      <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/case-study:opacity-100 transition-opacity duration-300"></span>
                    </span>
                  ))}
                </div>
                <h2 className="text-slate-900 dark:text-white text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-[-0.015em] group-hover/case-study:text-gradient-to-r group-hover/case-study:from-blue-400 group-hover/case-study:to-cyan-300 transition-all duration-500">
                  {caseStudy.title}
                </h2>
              </div>
              
              <div className="flex gap-2 lg:gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="relative p-2 lg:p-3 rounded-xl bg-gray-100 dark:bg-gradient-to-br dark:from-gray-700/80 dark:to-gray-800/80 border border-gray-300 dark:border-gray-600/50 text-gray-700 dark:text-white hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-gradient-to-br dark:hover:from-blue-500/20 dark:hover:to-cyan-500/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-0.5 group/tech"
                    title={tech.title}
                  >
                    <span className="material-symbols-outlined text-sm lg:text-base transform group-hover/tech:scale-110 group-hover/tech:rotate-12 transition-all duration-300">
                      {tech.icon}
                    </span>
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {tech.title}
                    </div>
                  </span>
                ))}
              </div>
            </div>

            {/* C/S/R Grid with 3D Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative z-10">
              {/* Challenge */}
              <div className="group/csr flex flex-col gap-3 lg:gap-4 rounded-2xl border border-gray-200 dark:border-[#282e39] bg-gray-50 dark:bg-[#0f1623] p-5 lg:p-6 xl:p-7 hover:border-red-500/30 hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 text-gradient-to-r from-red-400 to-orange-400">
                  <span className="material-symbols-outlined text-xl lg:text-2xl transform group-hover/csr:scale-110 group-hover/csr:rotate-6 transition-all duration-300">
                    {caseStudy.challenge.icon}
                  </span>
                  <h3 className="font-bold text-sm lg:text-base uppercase tracking-wide">
                    {caseStudy.challenge.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed transform group-hover/csr:translate-x-2 transition-transform duration-500">
                  {caseStudy.challenge.description}
                </p>
                {/* Animated indicator */}
                <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-orange-400 opacity-0 group-hover/csr:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              
              {/* Solution */}
              <div className="group/csr flex flex-col gap-3 lg:gap-4 rounded-2xl border border-gray-200 dark:border-[#282e39] bg-gray-50 dark:bg-[#0f1623] p-5 lg:p-6 xl:p-7 hover:border-blue-500/30 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 text-gradient-to-r from-blue-400 to-cyan-400">
                  <span className="material-symbols-outlined text-xl lg:text-2xl transform group-hover/csr:scale-110 group-hover/csr:rotate-6 transition-all duration-300">
                    {caseStudy.solution.icon}
                  </span>
                  <h3 className="font-bold text-sm lg:text-base uppercase tracking-wide">
                    {caseStudy.solution.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed transform group-hover/csr:translate-x-2 transition-transform duration-500">
                  {caseStudy.solution.description}
                </p>
                {/* Animated indicator */}
                <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/csr:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              
              {/* Result */}
              <div className="group/csr flex flex-col gap-3 lg:gap-4 rounded-2xl border border-gray-200 dark:border-[#282e39] bg-gray-50 dark:bg-[#0f1623] p-5 lg:p-6 xl:p-7 hover:border-green-500/30 hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 text-gradient-to-r from-green-400 to-emerald-400">
                  <span className="material-symbols-outlined text-xl lg:text-2xl transform group-hover/csr:scale-110 group-hover/csr:rotate-6 transition-all duration-300">
                    {caseStudy.result.icon}
                  </span>
                  <h3 className="font-bold text-sm lg:text-base uppercase tracking-wide">
                    {caseStudy.result.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed transform group-hover/csr:translate-x-2 transition-transform duration-500">
                  {caseStudy.result.description}
                </p>
                {/* Animated indicator */}
                <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover/csr:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>

            {/* Metrics Visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-4 lg:mt-6 relative z-10 group/metrics">
              {/* Stats Grid */}
              <div className="flex flex-col justify-between gap-4 lg:gap-6">
                <div className={`grid ${caseStudy.metrics.length === 3 ? 'grid-cols-2' : 'grid-cols-2'} gap-4 lg:gap-6 h-full`}>
                  {caseStudy.metrics.map((metric, index) => (
                    <div 
                      key={index}
                      onMouseEnter={() => setActiveMetric(index)}
                      onMouseLeave={() => setActiveMetric(null)}
                      className={`p-4 lg:p-6 xl:p-7 rounded-2xl bg-gray-50 dark:bg-[#0f1623] border border-gray-200 dark:border-[#282e39] flex flex-col justify-center relative group/metric ${
                        metric.highlight ? 'col-span-2' : ''
                      } transform hover:-translate-y-1 transition-all duration-300`}
                      style={{
                        transform: activeMetric === index ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                        boxShadow: activeMetric === index ? '0 20px 40px rgba(0,0,0,0.3)' : 'none'
                      }}
                    >
                      {/* Metric glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover/metric:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                      
                      <p className="text-gray-400 text-xs lg:text-sm font-semibold uppercase transform group-hover/metric:translate-x-1 transition-transform duration-300">
                        {metric.title}
                      </p>
                      <div className="flex items-baseline gap-2 mt-1 lg:mt-2">
                        <span className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white transform group-hover/metric:scale-110 transition-transform duration-300">
                          {metric.value}
                        </span>
                        {metric.unit && (
                          <span className="text-gray-500 text-sm lg:text-base font-medium line-through decoration-red-500/50 opacity-0 group-hover/metric:opacity-100 transition-opacity duration-500">
                            {metric.unit}
                          </span>
                        )}
                        {metric.change && (
                          <span className={`text-${
                            metric.trend === 'up' ? 'green-400' : 'green-400'
                          } text-sm lg:text-base font-bold flex items-center transform group-hover/metric:translate-x-1 transition-transform duration-300`}>
                            <span className="material-symbols-outlined text-sm lg:text-base animate-bounce">
                              {metric.trend === 'up' ? 'arrow_upward' : 'arrow_downward'}
                            </span>
                            {metric.change}
                          </span>
                        )}
                      </div>
                      
                      {/* Animated progress indicator for percentage metrics */}
                      {metric.title.includes('%') && (
                        <div className="mt-3 lg:mt-4 w-full h-1 bg-gray-800 rounded-full overflow-hidden opacity-0 group-hover/metric:opacity-100 transition-opacity duration-500">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: metric.value }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Chart Visualization */}
              {caseStudy.chartData && (
                <div className="flex flex-col rounded-2xl bg-white dark:bg-[#0f1623] border border-gray-200 dark:border-[#282e39] p-5 lg:p-6 xl:p-7 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group/chart-container">
                  <div className="flex justify-between items-center mb-6 lg:mb-8">
                    <h4 className="text-slate-900 dark:text-white text-sm lg:text-base font-bold transform group-hover/chart-container:translate-x-1 transition-transform duration-300">
                      {caseStudy.chartData.title}
                    </h4>
                    <span className="text-[10px] lg:text-xs uppercase tracking-wider text-gray-500 transform group-hover/chart-container:-translate-x-1 transition-transform duration-300">
                      {caseStudy.chartData.subtitle}
                    </span>
                  </div>
                  
                  {caseStudy.id === 1 
                    ? renderBarChart(
                        caseStudy.chartData.before,
                        caseStudy.chartData.after,
                        caseStudy.chartData.beforeLabel,
                        caseStudy.chartData.afterLabel
                      )
                    : renderLatencyChart(
                        caseStudy.chartData.before,
                        caseStudy.chartData.after,
                        caseStudy.chartData.beforeLabel,
                        caseStudy.chartData.afterLabel
                      )
                  }
                  
                  {/* Chart legend with animation */}
                  <div className="flex justify-center gap-6 lg:gap-8 mt-4 lg:mt-6 opacity-0 group-hover/chart-container:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-gradient-to-b from-gray-600 to-gray-800"></div>
                      <span className="text-[10px] lg:text-xs text-gray-400">Before</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-gradient-to-b from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      <span className="text-[10px] lg:text-xs text-slate-900 dark:text-white">After</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Aggregated Performance Dashboard removed */}
      </div>
    </section>
  );
};

export default CaseStudies;