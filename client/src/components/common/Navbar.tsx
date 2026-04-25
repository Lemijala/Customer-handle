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
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home', path: '/' },
    { label: 'About', id: 'about', path: '/about' },
    { label: 'Experience', id: 'skills', path: '/skills' },
    { label: 'Projects', id: 'case-studies', path: '/case-studies' },
    { label: 'Services', id: 'artifacts', path: '/artifacts' },
    { label: 'Contact', id: 'contact', path: '/contact' },
  ];

  const active = navItems.find(item => item.path === location.pathname)?.id || 'home';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    return () => document.body.classList.remove('no-scroll');
  }, []);

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Single unified pill */}
      <div className={`flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl shadow-black/10 border border-gray-200/60 dark:border-gray-700/50'
          : 'bg-white/75 dark:bg-gray-900/75 backdrop-blur-lg border border-gray-200/40 dark:border-gray-700/30'
      }`}>

        {/* Logo */}
        <button onClick={() => go('/')} className="flex items-center gap-2 px-3 py-1.5 rounded-xl group mr-1">
          <div className="w-7 h-7 rounded-lg overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
            <img src="/logo.png" alt="Woyyuu Tech" className="w-full h-full object-cover" />
          </div>
          <span className="font-black text-sm text-slate-900 dark:text-white hidden sm:inline group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
            Woyyuu Tech
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1 hidden md:block"></div>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.path)}
              className={`relative px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === item.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1 hidden md:block"></div>

        {/* Dark mode + Contact */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleDark}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[17px]">{dark ? 'light_mode' : 'dark_mode'}</span>
          </button>

          <button
            onClick={() => go('/contact')}
            className="hidden md:flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold px-4 py-1.5 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200 ml-1"
          >
            <span className="material-symbols-outlined text-[15px]">mail</span>
            Contact
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            onClick={() => {
              const opening = !isMenuOpen;
              setIsMenuOpen(opening);
              opening ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
            }}
          >
            <span className="material-symbols-outlined text-[20px]">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40" onClick={() => { setIsMenuOpen(false); document.body.classList.remove('no-scroll'); }} />
          <div className="fixed top-20 left-4 right-4 z-50 p-2 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/50 shadow-2xl flex flex-col gap-0.5 md:hidden">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => go(item.path)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === item.id
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold'
                    : 'text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-white'
                }`}>
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 pt-1 border-t border-gray-100 dark:border-gray-800 mt-1 px-1 pb-1">
              <button onClick={onToggleDark} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-slate-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                <span className="material-symbols-outlined text-[17px]">{dark ? 'light_mode' : 'dark_mode'}</span>
                {dark ? 'Light' : 'Dark'}
              </button>
              <button onClick={() => go('/contact')} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md">
                <span className="material-symbols-outlined text-[15px]">mail</span>
                Contact
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
