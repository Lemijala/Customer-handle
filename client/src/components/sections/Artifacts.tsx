// File path: src/components/sections/Artifacts.tsx

import React, { useState } from 'react';

interface Diagram {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

interface TechnicalDocument {
  id: number;
  title: string;
  description: string;
  status: 'Public' | 'Protected';
  icon: string;
  iconColor: string;
  actionText: string;
  actionIcon: string;
}

const Artifacts: React.FC = () => {
  const [hoveredDiagram, setHoveredDiagram] = useState<number | null>(null);
  const [hoveredDocument, setHoveredDocument] = useState<number | null>(null);
  const [hoveredProof, setHoveredProof] = useState<string | null>(null);

  const diagrams: Diagram[] = [
    {
      id: 1,
      title: "Distributed Payment Gateway",
      description: "High-availability architecture handling 10k TPS with multi-region failover.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ryr93_v-VT2mo8LE3doh9IoG1dKsnWv-t4tUl-zK6iYegkomMDzhYmqc_aqY9raIKD5i30DuDTQhQFPuw8XD_CexWJy-D_QnyZ5imJv4oKfXLiQf1Aizw6cqxHEoCmN4CZ87JaG8mzqQHSvwABaOI3djh9BKZKRnsGOsw8DK6ZfhqqvXMKWir8lU4nWD92rc7KpxODh0DqGSKiRgzQv87BHz2ISZkusDzLVV8LRIkCtild-IDgw_2vfy6qmp-YkMm6zvOz1j0IhI",
      altText: "Cloud architecture diagram on a whiteboard showing distributed servers"
    },
    {
      id: 2,
      title: "Event-Driven Microservices",
      description: "Kafka-based event bus implementation ensuring eventual consistency.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiIxc05Dn5sdQGtE5yff5Rw3FDOdGACzUaL59nuW9x6x1cBGYtubIm00mDEpganzAJJxla3VQkRGiTMYhZ-gCpWqKqB9BtFyOEDg_hHmo46bZJt782279molnaNDvqsaz48yuG9VAuIVoaZG0aL_rZm_67XDbFHrRguesCL3AGxLvoodmr-0Mk3L6dF7TmswWdxEFyw3EjobKs4PbcRlMJUbZCRQQrppwRO8nxGlih-12lhH5omlGVguP4FxRaw29Dr_IkNDwVxKOy",
      altText: "Abstract network visualization with connecting nodes and lines"
    },
    {
      id: 3,
      title: "Cloud-Native Data Pipeline",
      description: "Serverless ETL process using Lambda, Kinesis, and Redshift.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbbfLtLUmA6-FsODL8nhSqTiUNcS53RzRNEy0S8MMcI9jq2NhtMWeJVF29lMnVYe0E9GeB00uJMA2L34eDDtP6UOLV2UlkLZHU-tBvNSsqdWoj_z_XNYekRr2cL8LAaH9kn1XZ0c9rtbXtoA5KBuZB_sTA30KPVwzhg5LkgrATCGNwEhhjDqGb2jVSqnP4gOabu4lwtM-5wgCWLwvO4zEXl4AhIUvhSg87jq9TcHMq96KSO19hKzbLEpmXVEHe1l2xaUUCXQSbrFKn",
      altText: "Data visualization dashboard showing analytics charts"
    }
  ];

  const documents: TechnicalDocument[] = [
    {
      id: 1,
      title: "RFC-024: Monolith Decomposition",
      description: "Strategy for breaking down the legacy billing system into independent services.",
      status: "Public",
      icon: "description",
      iconColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/10 group-hover:from-blue-500 group-hover:to-blue-600",
      actionText: "Read Document",
      actionIcon: "arrow_forward"
    },
    {
      id: 2,
      title: "Post-Mortem: Nov 12 Outage",
      description: "Analysis of the cascading failure in the caching layer and future mitigation steps.",
      status: "Protected",
      icon: "warning",
      iconColor: "bg-gradient-to-br from-orange-500/20 to-orange-600/10 group-hover:from-orange-500 group-hover:to-orange-600",
      actionText: "Request Access",
      actionIcon: "key"
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-200 w-full min-h-screen relative overflow-hidden">
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

      {/* Container with max-width */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        
        {/* Hero / Intro with enhanced animations */}
        <div className="flex flex-wrap justify-between gap-3 p-4 md:p-8 lg:p-12 mt-4 animate-slide-in">
          <div className="flex flex-col gap-3 w-full group/hero">
            <div className="inline-flex items-center gap-2 mb-2 animate-slide-up">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              <span className="text-blue-500 font-bold tracking-wider text-xs uppercase animate-gradient">
                Engineering Excellence
              </span>
            </div>
            
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight group-hover/hero:scale-[1.01] transition-all duration-500">
              Engineering{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 animate-gradient-x">
                  Artifacts & Verification
                </span>
                {/* Underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/hero:w-full transition-all duration-700 ease-out"></span>
              </span>
            </h1>
            
            <p className="text-[#9da6b9] text-base md:text-lg font-normal leading-normal max-w-3xl transform group-hover/hero:translate-x-1 transition-transform duration-500">
              A curated collection of architectural diagrams, production-grade code samples, technical writings, and external validation of my engineering expertise.
            </p>

            {/* Animated separator */}
            <div className="relative w-full max-w-3xl mt-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Section 1: System Architecture */}
        <section className="mt-8 px-4 md:px-8 lg:px-12 animate-slide-in" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center justify-between pb-3 pt-5 border-b border-[#282e39]/50 mb-4 group/title">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 text-blue-500 group-hover/title:scale-110 group-hover/title:rotate-6 transition-all duration-300">
                <span className="material-symbols-outlined !text-[20px]">schema</span>
              </div>
              <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em]">
                System Architecture
              </h2>
            </div>
            <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1 group/btn transform hover:translate-x-1 transition-transform duration-300">
              View All Diagrams 
              <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagrams.map((diagram, index) => (
              <div 
                key={diagram.id}
                onMouseEnter={() => setHoveredDiagram(diagram.id)}
                onMouseLeave={() => setHoveredDiagram(null)}
                className="group relative overflow-hidden rounded-xl bg-card-light dark:bg-card-dark border border-border-muted dark:border-[#282e39] hover:dark:border-blue-500/50 transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                style={{
                  transform: hoveredDiagram === diagram.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Glow border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                
                <div className="aspect-video relative overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
                  
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${diagram.imageUrl}')` }}
                    aria-label={diagram.altText}
                  />
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 size-12 bg-black/50 p-3 rounded-full backdrop-blur-sm">
                      zoom_in
                    </span>
                  </div>
                </div>
                
                <div className="p-5 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg transform group-hover:translate-x-1 transition-transform duration-300">
                      {diagram.title}
                    </h3>
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-[#9da6b9] text-sm leading-relaxed transform group-hover:translate-x-2 transition-transform duration-500">
                    {diagram.description}
                  </p>
                  
                  {/* Animated progress indicator */}
                  <div className="mt-4 w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-500/50 to-cyan-400/50 animate-float"
                      style={{
                        left: `${10 + i * 15}%`,
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

        {/* Section 2: Code Proficiency */}
        <section className="mt-12 px-4 md:px-8 lg:px-12 animate-slide-in" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center justify-between pb-3 pt-5 border-b border-[#282e39]/50 mb-6 group/title">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 text-green-500 group-hover/title:scale-110 group-hover/title:rotate-6 transition-all duration-300">
                <span className="material-symbols-outlined !text-[20px]">code</span>
              </div>
              <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em]">
                Code Proficiency
              </h2>
            </div>
            <div className="flex gap-2">
              {['Rust', 'Go', 'GraphQL'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-2 md:px-3 py-1 rounded text-xs md:text-sm font-mono transform hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))' :
                               index === 1 ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))' :
                                             'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1))',
                    color: index === 0 ? '#60a5fa' : 
                          index === 1 ? '#fbbf24' : 
                                        '#f472b6',
                    animationDelay: `${0.3 + index * 0.1}s`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Code Editor Mockup - Enhanced */}
          <div className="w-full bg-code-bg rounded-xl overflow-hidden border border-[#282e39] shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group/editor transform hover:-translate-y-1">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent rounded-xl opacity-0 group-hover/editor:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            
            {/* Editor Header */}
            <div className="bg-[#161b22] px-4 md:px-6 py-3 flex items-center justify-between border-b border-[#282e39] group/header">
              <div className="flex gap-2">
                {['#ff5f56', '#ffbd2e', '#27c93f'].map((color, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 group-hover/header:scale-110"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              
              <div className="flex gap-1 text-xs md:text-sm font-mono text-gray-400 bg-black/30 p-1 rounded">
                {['payment_processor.rs', 'schema.graphql', 'worker.go'].map((file, i) => (
                  <div 
                    key={file}
                    className={`px-3 md:px-4 py-1 rounded cursor-pointer transition-all duration-300 ${
                      i === 0 
                        ? 'bg-[#282e39] text-white transform scale-105 shadow-lg' 
                        : 'hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {file}
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3 text-gray-400">
                {['content_copy', 'settings'].map((icon, i) => (
                  <span 
                    key={icon}
                    className="material-symbols-outlined text-[16px] md:text-[18px] cursor-pointer hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="p-4 md:p-6 overflow-x-auto code-scroll bg-gradient-to-br from-gray-900 to-gray-950">
              <pre className="font-mono text-sm md:text-base leading-relaxed text-gray-300">
                <code className="animate-slide-in" style={{animationDelay: '0.4s'}}>
                  <span className="text-gray-500">1</span>  <span className="text-[#ff7b72] italic">// Implementation of the robust payment processing trait</span><br />
                  <span className="text-gray-500">2</span>  <span className="text-[#ff7b72]">use</span> async_trait::async_trait;<br />
                  <span className="text-gray-500">3</span>  <span className="text-[#ff7b72]">use</span> crate::domain:{"{"}Payment, PaymentResult, Error{"}"};<br />
                  <span className="text-gray-500">4</span>  <br />
                  <span className="text-gray-500">5</span>  <span className="text-[#d2a8ff]">#[async_trait]</span><br />
                  <span className="text-gray-500">6</span>  <span className="text-[#ff7b72]">pub trait</span> <span className="text-[#d2a8ff]">PaymentGateway</span> {"{"}<br />
                  <span className="text-gray-500">7</span>      <span className="text-[#ff7b72]">async fn</span> <span className="text-[#d2a8ff]">process</span>(&amp;<span className="text-[#ff7b72]">self</span>, payment: Payment) -&gt; <span className="text-[#ff7b72]">Result</span>&lt;PaymentResult, Error&gt;;<br />
                  <span className="text-gray-500">8</span>  {"}"}<br />
                  <span className="text-gray-500">9</span>  <br />
                  <span className="text-gray-500">10</span> <span className="text-[#ff7b72]">pub struct</span> <span className="text-[#d2a8ff]">StripeProcessor</span> {"{"}<br />
                  <span className="text-gray-500">11</span>     client: Client,<br />
                  <span className="text-gray-500">12</span>     retry_policy: RetryPolicy,<br />
                  <span className="text-gray-500">13</span> {"}"}<br />
                  <span className="text-gray-500">14</span> <br />
                  <span className="text-gray-500">15</span> <span className="text-[#ff7b72]">impl</span> StripeProcessor {"{"}<br />
                  <span className="text-gray-500">16</span>     <span className="text-[#ff7b72]">pub fn</span> <span className="text-[#d2a8ff]">new</span>(api_key: String) -&gt; <span className="text-[#ff7b72]">Self</span> {"{"}<br />
                  <span className="text-gray-500">17</span>         <span className="text-[#79c0ff]">println!</span>(<span className="text-[#a5d6ff]">"Initializing Secure Stripe Processor"</span>);<br />
                  <span className="text-gray-500">18</span>         <span className="text-[#ff7b72]">Self</span> {"{"} <br />
                  <span className="text-gray-500">19</span>             client: Client::new(api_key),<br />
                  <span className="text-gray-500">20</span>             retry_policy: RetryPolicy::exponential_backoff(<span className="text-[#79c0ff]">3</span>)<br />
                  <span className="text-gray-500">21</span>         {"}"}<br />
                  <span className="text-gray-500">22</span>     {"}"}<br />
                  <span className="text-gray-500">23</span> {"}"}
                </code>
              </pre>
              
              {/* Typewriter cursor */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-3 h-5 bg-green-500 animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">Compiled successfully ✓</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Writing */}
        <section className="mt-12 px-4 md:px-8 lg:px-12 animate-slide-in" style={{animationDelay: '0.3s'}}>
          <div className="flex items-center gap-3 pb-3 border-b border-[#282e39]/50 mb-6 group/title">
            <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 text-purple-500 group-hover/title:scale-110 group-hover/title:rotate-6 transition-all duration-300">
              <span className="material-symbols-outlined !text-[20px]">description</span>
            </div>
            <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em]">
              Technical Writing
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div 
                key={doc.id}
                onMouseEnter={() => setHoveredDocument(doc.id)}
                onMouseLeave={() => setHoveredDocument(null)}
                className="bg-card-light dark:bg-card-dark border border-border-muted dark:border-[#282e39] hover:dark:border-blue-500/50 rounded-lg p-4 md:p-6 flex items-start gap-4 transition-all group cursor-pointer transform hover:-translate-y-2"
                style={{
                  transform: hoveredDocument === doc.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  animationDelay: `${0.4 + index * 0.1}s`
                }}
              >
                {/* Icon with glow effect */}
                <div className={`p-3 md:p-4 rounded-lg transition-all duration-300 relative overflow-hidden ${doc.iconColor} group-hover:scale-110`}>
                  <span className="material-symbols-outlined text-lg md:text-xl relative z-10">
                    {doc.icon}
                  </span>
                  {/* Icon glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-current/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-slate-900 dark:text-white font-bold text-base md:text-lg transform group-hover:translate-x-1 transition-transform duration-300">
                      {doc.title}
                    </h3>
                    <span className={`text-xs md:text-sm px-2 py-0.5 rounded flex items-center gap-1 transform group-hover:scale-105 transition-all duration-300 ${
                      doc.status === 'Public' 
                        ? 'bg-gradient-to-r from-green-500/20 to-green-600/10 text-green-400' 
                        : 'bg-gradient-to-r from-orange-500/20 to-orange-600/10 text-orange-400'
                    }`}>
                      {doc.status === 'Protected' && (
                        <span className="material-symbols-outlined text-[12px] md:text-[14px] animate-pulse">
                          lock
                        </span>
                      )}
                      {doc.status}
                    </span>
                  </div>
                  
                  <p className="text-[#9da6b9] text-sm md:text-base mb-3 transform group-hover:translate-x-2 transition-transform duration-500">
                    {doc.description}
                  </p>
                  
                  <span className={`text-sm md:text-base font-bold flex items-center gap-1 group-hover:gap-2 transition-all ${
                    doc.status === 'Public' 
                      ? 'text-blue-400 group-hover:text-blue-300' 
                      : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {doc.actionText} 
                    <span className="material-symbols-outlined text-[16px] md:text-[18px] transform group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300">
                      {doc.actionIcon}
                    </span>
                  </span>
                  
                  {/* Progress line */}
                  <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Verification & Proof */}
        <section className="mt-12 px-4 md:px-8 lg:px-12 mb-12 animate-slide-in" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center gap-3 pb-3 border-b border-[#282e39]/50 mb-6 group/title">
            <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/20 text-yellow-500 group-hover/title:scale-110 group-hover/title:rotate-6 transition-all duration-300">
              <span className="material-symbols-outlined !text-[20px]">verified</span>
            </div>
            <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em]">
              Verification & Proof
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LinkedIn Recommendation */}
            <div 
              onMouseEnter={() => setHoveredProof('linkedin')}
              onMouseLeave={() => setHoveredProof(null)}
              className="bg-card-light dark:bg-card-dark border border-border-muted dark:border-[#282e39] rounded-xl p-6 relative overflow-hidden group transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              style={{
                transform: hoveredProof === 'linkedin' ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
              }}
            >
              {/* Quote mark animation */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <span className="material-symbols-outlined text-6xl animate-float-slow">format_quote</span>
              </div>
              
              {/* Profile with glow */}
              <div className="flex items-center gap-3 mb-4 relative">
                <div className="relative">
                  <img 
                    alt="Portrait of Lemesa Girma" 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-primary group-hover:border-4 transition-all duration-300"
                    src="/profile.png" 
                  />
                  {/* Profile glow */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-base md:text-lg transform group-hover:translate-x-1 transition-transform duration-300">
                    James Carter
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    CTO at TechFlow Inc.
                  </p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base italic leading-relaxed mb-4 transform group-hover:translate-x-2 transition-transform duration-500">
                "Lemesa transformed our backend infrastructure. His ability to visualize complex distributed systems and turn them into performant code is unmatched. The payment gateway he designed is still our core asset."
              </p>
              
              <a className="text-blue-400 text-xs md:text-sm font-bold hover:underline flex items-center gap-1 group/link transform hover:translate-x-1 transition-transform duration-300" href="#">
                View on LinkedIn 
                <span className="material-symbols-outlined text-[14px] md:text-[16px] group-hover/link:translate-x-1 group-hover/link:rotate-12 transition-all duration-300">
                  open_in_new
                </span>
              </a>
              
              {/* Connection dots */}
              <div className="absolute bottom-4 left-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* GitHub Activity */}
            <div 
              onMouseEnter={() => setHoveredProof('github')}
              onMouseLeave={() => setHoveredProof(null)}
              className="bg-card-light dark:bg-card-dark border border-border-muted dark:border-[#282e39] rounded-xl p-6 flex flex-col group transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              style={{
                transform: hoveredProof === 'github' ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-slate-900 dark:text-white font-bold text-base md:text-lg transform group-hover:translate-x-1 transition-transform duration-300">
                  GitHub Activity
                </h3>
                <span className="text-green-400 text-xs md:text-sm font-mono px-2 md:px-3 py-1 rounded bg-gradient-to-r from-green-500/20 to-green-600/10 transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
                  2,400 contribs
                </span>
              </div>
              
              {/* Animated Heatmap */}
              <div className="flex-1 flex flex-col justify-center gap-1 mb-4 group/heatmap">
                {[0, 1, 2].map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-1 justify-center opacity-80 group-hover/heatmap:opacity-100 transition-opacity duration-300">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((cell, idx) => (
                      <div 
                        key={idx}
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-sm transition-all duration-300 group-hover/heatmap:scale-110 ${
                          rowIdx === 0 ? (
                            idx === 0 || idx === 7 ? 'bg-gray-700' : 
                            idx === 1 || idx === 6 ? 'bg-green-900' : 
                            idx === 2 || idx === 5 ? 'bg-green-500' : 
                            idx === 3 ? 'bg-green-700' : 'bg-green-300'
                          ) : rowIdx === 1 ? (
                            idx === 0 ? 'bg-green-500' : 
                            idx === 1 ? 'bg-green-300' : 
                            idx === 2 ? 'bg-green-700' : 
                            idx === 3 ? 'bg-green-500' : 
                            idx === 4 ? 'bg-green-900' : 
                            idx === 5 ? 'bg-green-500' : 
                            idx === 6 ? 'bg-green-300' : 'bg-green-700'
                          ) : (
                            idx === 0 ? 'bg-green-900' : 
                            idx === 1 || idx === 5 ? 'bg-gray-700' : 
                            idx === 2 || idx === 6 ? 'bg-green-500' : 
                            idx === 3 ? 'bg-green-300' : 'bg-green-700'
                          )
                        }`}
                        style={{
                          animationDelay: `${rowIdx * 0.1 + idx * 0.05}s`
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-[#282e39] flex justify-between text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Top Lang: Rust (65%)</span>
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">Pull Requests: 142</span>
              </div>
              
              {/* Git branch animation */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-green-500/30 text-2xl animate-bounce">
                  fork_right
                </span>
              </div>
            </div>

            {/* Patent Portfolio */}
            <div 
              onMouseEnter={() => setHoveredProof('patent')}
              onMouseLeave={() => setHoveredProof(null)}
              className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] border border-yellow-600/30 rounded-xl p-6 relative overflow-hidden group transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              style={{
                transform: hoveredProof === 'patent' ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
              }}
            >
              {/* Animated glow */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700"></div>
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 md:p-3 rounded-lg text-black shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-lg md:text-xl group-hover:rotate-12 transition-transform duration-300">
                    workspace_premium
                  </span>
                </div>
                <h3 className="text-white font-bold text-base md:text-lg transform group-hover:translate-x-1 transition-transform duration-300">
                  Patent Portfolio
                </h3>
              </div>
              
              <div className="mb-4 relative z-10">
                <p className="text-xs md:text-sm text-yellow-500 font-mono mb-1 transform group-hover:translate-x-1 transition-transform duration-300">
                  US PATENT #10,234,567
                </p>
                <p className="text-white text-sm md:text-base font-medium transform group-hover:translate-x-2 transition-transform duration-500">
                  "Algorithmic Data Sharding in Distributed Databases"
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-300">
                <span className="material-symbols-outlined text-[14px] md:text-[16px] text-green-500 animate-pulse">
                  verified
                </span>
                Granted: Mar 2022
              </div>
              
              <button className="mt-4 w-full py-2 md:py-3 rounded-lg bg-[#282e39] hover:bg-gradient-to-r hover:from-yellow-600/20 hover:to-orange-600/20 text-white text-xs md:text-sm font-bold transition-all duration-300 border border-yellow-600/20 hover:border-yellow-500/40 transform hover:-translate-y-0.5">
                View Filing
              </button>
              
              {/* Patent seal animation */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 h-1 rounded-full bg-gradient-to-br from-yellow-500 to-orange-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Artifacts;