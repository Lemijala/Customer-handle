// File path: src/components/common/Navbar.tsx

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  dark: boolean;
  onToggleDark: () => void;
}

const Navbar = ({ dark, onToggleDark }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home', path: '/', icon: 'home' },
    { label: 'About', id: 'about', path: '/about', icon: 'info' },
    { label: 'Experience', id: 'skills', path: '/skills', icon: 'work' },
    { label: 'Projects', id: 'case-studies', path: '/case-studies', icon: 'folder' },
    { label: 'Artifacts', id: 'artifacts', path: '/artifacts', icon: 'code' },
    { label: 'Contact', id: 'contact', path: '/contact', icon: 'mail' },
  ];

  const activeSection = navItems.find(item => item.path === location.pathname)?.id || 'home';

  useEffect(() => {
    return () => { document.body.classList.remove('no-scroll'); };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const item = navItems.find(n => n.id === sectionId);
    if (item) { navigate(item.path); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const handleLogoClick = () => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleContactClick = () => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo pill */}
          <button onClick={handleLogoClick} className={`flex items-center gap-2.5 group flex-shrink-0 px-4 py-2.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl shadow-black/10 border border-gray-200/60 dark:border-gray-700/50'
              : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200/40 dark:border-gray-700/30'
          }`}>
            <div className="w-8 h-8 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <img src="/logo.png" alt="LemiTech" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-base text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
              LemiTech
            </span>
          </button>

          {/* Nav links — each item its own pill */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-1.5 px-3 lg:px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow-lg shadow-blue-500/30'
                    : isScrolled
                      ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-gray-200/60 dark:border-gray-700/50 text-slate-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 shadow-md shadow-black/5 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-0.5'
                      : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-gray-200/40 dark:border-gray-700/30 text-slate-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:-translate-y-0.5'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">{item.icon}</span>
                <span className="hidden lg:inline">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Dark mode pill */}
          <button
            onClick={onToggleDark}
            className={`hidden md:flex w-10 h-10 rounded-2xl items-center justify-center text-slate-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 flex-shrink-0 transition-all duration-300 border hover:-translate-y-0.5 ${
              isScrolled
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md border-gray-200/60 dark:border-gray-700/50'
                : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-gray-200/40 dark:border-gray-700/30'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{dark ? 'light_mode' : 'dark_mode'}</span>
          </button>

          {/* Contact Me pill */}
          <button
            onClick={handleContactClick}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold px-3 lg:px-5 py-2.5 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex-shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span className="hidden lg:inline">Contact Me</span>
          </button>

          {/* Mobile menu button */}
          <button
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 dark:text-gray-400 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border border-gray-200/60 dark:border-gray-700/50'
                : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200/40 dark:border-gray-700/30'
            }`}
            onClick={() => {
              const opening = !isMenuOpen;
              setIsMenuOpen(opening);
              opening ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
            }}
          >
            <span className="material-symbols-outlined text-[22px]">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40" onClick={() => { setIsMenuOpen(false); document.body.classList.remove('no-scroll'); }} />
            <div className="fixed top-20 left-4 right-4 md:hidden z-50 p-3 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/50 shadow-2xl flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-800 mt-1">
                <button onClick={onToggleDark} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-slate-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  <span className="material-symbols-outlined text-[18px]">{dark ? 'light_mode' : 'dark_mode'}</span>
                  {dark ? 'Light' : 'Dark'}
                </button>
                <button onClick={handleContactClick} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  Contact Me
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
