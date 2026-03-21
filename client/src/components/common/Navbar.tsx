// File path: src/components/common/Navbar.tsx

import { useState, useEffect } from 'react';

interface NavbarProps {
  dark: boolean;
  onToggleDark: () => void;
}

const Navbar = ({ dark, onToggleDark }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { label: 'Home', id: 'home', icon: 'home' },
    { label: 'About', id: 'about', icon: 'person' },
    { label: 'Experience', id: 'skills', icon: 'work' },
    { label: 'Projects', id: 'case-studies', icon: 'folder' },
    { label: 'Artifacts', id: 'artifacts', icon: 'code' },
    { label: 'Contact', id: 'contact', icon: 'mail' },
  ];

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => { document.body.classList.remove('no-scroll'); };
  }, []);

  // Handle scroll effect ONLY for background changes and active section
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Update scrolled state with smoother transition
          if (scrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          // Detect active section with better accuracy
          const sections = navItems.map(item => ({
            id: item.id,
            element: document.getElementById(item.id)
          }));

          let currentActive = 'home';
          let closestDistance = Infinity;
          
          for (const section of sections) {
            if (section.element) {
              const rect = section.element.getBoundingClientRect();
              const distance = Math.abs(rect.top);
              
              if (rect.top <= 100 && rect.bottom >= 100) {
                currentActive = section.id;
                break;
              }
              
              // Find closest section
              if (distance < closestDistance) {
                closestDistance = distance;
                currentActive = section.id;
              }
            }
          }

          setActiveSection(currentActive);
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section with animation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Add ripple effect to clicked item
      const clickedItem = document.querySelector(`[data-nav-item="${sectionId}"]`);
      if (clickedItem) {
        clickedItem.classList.add('active-click');
        setTimeout(() => clickedItem.classList.remove('active-click'), 300);
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsMenuOpen(false);
      document.body.classList.remove('no-scroll');
    }
  };

  // Handle logo click with enhanced animation
  const handleLogoClick = () => {
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
      logoIcon.classList.add('logo-spin');
      setTimeout(() => logoIcon.classList.remove('logo-spin'), 600);
    }
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(59, 130, 246, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    const logoBtn = document.querySelector('[data-logo-btn]');
    if (logoBtn) {
      const rect = logoBtn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = rect.left + rect.width / 2 - size / 2;
      const y = rect.top + rect.height / 2 - size / 2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }
    
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    setActiveSection('home');
  };

  // Handle contact button click with enhanced animation
  const handleContactClick = () => {
    const contactBtn = document.querySelector('.contact-button');
    if (contactBtn) {
      contactBtn.classList.add('button-pulse');
      setTimeout(() => contactBtn.classList.remove('button-pulse'), 300);
      
      // Create particle burst
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
        `;
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 40;
        particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
        particle.style.animation = `particleBurst 0.6s ease-out forwards`;
        particle.style.animationDelay = `${i * 0.05}s`;
        
        contactBtn.appendChild(particle);
        setTimeout(() => particle.remove(), 600);
      }
    }
    
    setTimeout(() => {
      scrollToSection('contact');
    }, 200);
  };

  // Handle mobile menu toggle with enhanced animation
  const handleMenuToggle = () => {
    const opening = !isMenuOpen;
    setIsMenuOpen(opening);
    if (opening) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  // Calculate active indicator position
  const getIndicatorStyle = () => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection);
    return {
      width: `${100 / navItems.length}%`,
      transform: `translateX(${activeIndex * 100}%)`,
      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    };
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl shadow-2xl shadow-primary/10 border-b border-border-muted/40 dark:border-primary/20 py-2'
          : 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg border-b border-border-muted/30 dark:border-[#282e39]/30 py-3'
      }`}
      style={{
        willChange: 'backdrop-filter'
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'moveGradient 8s ease-in-out infinite'
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-full px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo with enhanced animation */}
          <button 
            data-logo-btn
            onClick={handleLogoClick}
            className="flex items-center gap-3 group relative overflow-visible"
          >
            {/* Glow effect container */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="logo-icon size-10 md:size-12 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative flex-shrink-0">
              <img src="/logo.png" alt="Lemitech" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-lg md:text-xl font-bold leading-none tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-300 transition-all duration-500 transform group-hover:translate-x-1">
                LemiTech
              </h2>
              <span className="text-[9px] md:text-[10px] text-gray-400 font-medium tracking-widest uppercase mt-0.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-1">
                <span className="w-2 h-px bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                Software Developer
                <span className="w-2 h-px bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <nav className="flex gap-2 lg:gap-3 relative">
              {/* Active indicator line with glow */}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-200/60 dark:bg-gray-800/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-blue-500 to-cyan-400 rounded-full transition-all duration-500 ease-out shadow-lg shadow-primary/30"
                  style={getIndicatorStyle()}
                >
                  {/* Indicator glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-cyan-400/40 blur-sm rounded-full"></div>
                </div>
              </div>
              
              {navItems.map((item, index) => (
                <button
                  key={index}
                  data-nav-item={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative text-sm font-medium transition-all duration-300 py-2 px-3 md:px-4 rounded-lg group/nav-item ${
                      activeSection === item.id
                        ? 'text-slate-900 dark:text-white'
                        : 'text-gray-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Background glow on hover/active */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-primary/20 via-primary/10 to-cyan-400/10 shadow-inner shadow-primary/20' 
                        : 'bg-primary/5 opacity-0 group-hover/nav-item:opacity-100'
                  }`}></div>
                  
                  {/* Border glow effect */}
                  <div className={`absolute -inset-0.5 rounded-lg border border-transparent transition-all duration-500 ${
                    activeSection === item.id 
                      ? 'border-primary/30 shadow-lg shadow-primary/20' 
                      : 'group-hover/nav-item:border-primary/20 group-hover/nav-item:shadow-md group-hover/nav-item:shadow-primary/10'
                  }`}></div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {/* Icon indicator */}
                    <span className={`material-symbols-outlined text-[16px] transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-primary scale-110 rotate-12' 
                        : 'text-gray-500 group-hover/nav-item:text-primary group-hover/nav-item:scale-110 group-hover/nav-item:rotate-12'
                    }`}>
                      {item.icon}
                    </span>
                    
                    {item.label}
                    
                    {/* Active arrow indicator */}
                    {activeSection === item.id && (
                      <span className="material-symbols-outlined text-primary text-[14px] animate-pulse-slow">
                        arrow_right
                      </span>
                    )}
                  </span>
                  
                  {/* Dot indicator with pulse */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'w-2 h-2 bg-gradient-to-r from-primary to-cyan-400 rounded-full opacity-100 scale-100 shadow-lg shadow-primary/50' 
                      : 'w-1 h-1 bg-gray-500 rounded-full opacity-0 scale-0'
                  }`}>
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary to-cyan-400 animate-ping ${
                      activeSection === item.id ? 'opacity-30' : 'opacity-0'
                    }`}></div>
                  </div>
                  
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/nav-item:translate-x-full transition-transform duration-700 opacity-0 group-hover/nav-item:opacity-100"></div>
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover/nav-item:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-500/50 to-cyan-400/50 animate-float"
                        style={{
                          left: `${15 + i * 25}%`,
                          top: '30%',
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${2 + i * 0.3}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </button>
              ))}
            </nav>
            
            {/* Separator with gradient animation */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-border-muted to-transparent opacity-70 group-hover/separator:opacity-100 transition-all duration-500 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/20 to-cyan-400/0 opacity-0 group-hover/separator:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* GitHub link */}
            <a
              href="https://github.com/Lemijala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 group/gh"
            >
              <svg className="w-5 h-5 group-hover/gh:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 group/theme"
            >
              <span className="material-symbols-outlined text-[20px] group-hover/theme:scale-110 group-hover/theme:rotate-12 transition-all duration-300">
                {dark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            
            {/* Contact Button with enhanced animation */}
            <button 
              onClick={handleContactClick}
              className="contact-button relative overflow-hidden group bg-gradient-to-r from-primary via-blue-500 to-cyan-400 text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 hover:shadow-primary/50"
            >
              {/* Background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-400 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
              
              {/* Animated border */}
              <div className="absolute -inset-0.5 rounded-xl border border-primary/30 group-hover:border-white/30 transition-all duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Text with icon animation */}
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <span className="material-symbols-outlined text-[16px] transition-all duration-500 group-hover:translate-x-1 group-hover:rotate-12 group-hover:scale-110">
                  arrow_forward
                </span>
              </span>
              
              {/* Particles effect on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-1 bg-white/50 rounded-full animate-float-fast"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: '20%',
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: `${0.8 + i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </button>
          </div>

          {/* Mobile Menu Button with enhanced animation */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 active:scale-95 group"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {/* Menu icon container */}
              <div className="relative size-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px] transition-all duration-300 group-hover:rotate-90 group-hover:scale-110 absolute">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Border animation */}
                <div className="absolute -inset-0.5 rounded-lg border border-transparent group-hover:border-primary/30 transition-all duration-300"></div>
              </div>
              
              {/* Dot indicators */}
              <div className="absolute -top-1 -right-1 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden animate-fadeIn"
              onClick={handleMenuToggle}
            />
            
            <div className="md:hidden border-t border-border-muted/50 mt-2 py-4 animate-slideIn backdrop-blur-xl bg-background-light/95 dark:bg-background-dark/95 rounded-b-2xl shadow-2xl stagger-animate fixed left-4 right-4 top-20 overflow-hidden">
              {/* Menu background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/10"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                  backgroundSize: '200% 200%',
                  animation: 'moveGradient 10s ease-in-out infinite'
                }}></div>
              </div>
              
              <div className="relative z-10 flex flex-col gap-1 px-2">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative overflow-hidden group text-left px-4 py-4 rounded-xl transition-all duration-300 transform hover:translate-x-2 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-primary/20 to-primary/5 border-l-4 border-primary shadow-lg shadow-primary/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    style={{
                      animationDelay: `${index * 80}ms`
                    }}
                  >
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-between">
                      <span className="font-medium flex items-center gap-3">
                        {/* Icon with animation */}
                        <span className={`material-symbols-outlined text-lg transition-all duration-300 ${
                          activeSection === item.id 
                            ? 'text-primary scale-110 rotate-12' 
                            : 'text-gray-500 group-hover:text-primary group-hover:scale-110 group-hover:rotate-12'
                        }`}>
                          {item.icon}
                        </span>
                        {item.label}
                      </span>
                      
                      <span className={`material-symbols-outlined text-primary text-[20px] transition-all duration-300 transform ${
                        activeSection === item.id 
                          ? 'translate-x-0 opacity-100 scale-110' 
                          : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'
                      }`}>
                        arrow_forward
                      </span>
                    </span>
                    
                    {/* Active indicator line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transform scale-x-0 transition-transform duration-500 ${
                      activeSection === item.id ? 'scale-x-100' : 'group-hover:scale-x-100'
                    }`}></div>
                  </button>
                ))}
                
                {/* Mobile GitHub + Dark Mode */}
                <div className="flex items-center gap-3 px-4 pt-2 pb-1">
                  <a
                    href="https://github.com/Lemijala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                  <button
                    onClick={onToggleDark}
                    className="ml-auto flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-[18px]">{dark ? 'light_mode' : 'dark_mode'}</span>
                    {dark ? 'Light mode' : 'Dark mode'}
                  </button>
                </div>

                {/* Mobile Contact Button */}
                <button 
                  onClick={handleContactClick}
                  className="mt-4 relative overflow-hidden group bg-gradient-to-r from-primary via-blue-500 to-cyan-400 text-white font-bold py-4 px-5 rounded-xl transition-all duration-500 active:scale-95 shadow-xl shadow-primary/20"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-blue-500/30 to-cyan-400/30 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Text */}
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined text-[22px] transition-transform group-hover:translate-x-1 group-hover:rotate-12 duration-300">
                      mail
                    </span>
                    Contact Me
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1 group-hover:rotate-12 duration-300">
                      arrow_forward
                    </span>
                  </span>
                  
                  {/* Particles */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1 h-1 bg-white/50 rounded-full animate-float-fast"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: '30%',
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1s'
                        }}
                      ></div>
                    ))}
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;