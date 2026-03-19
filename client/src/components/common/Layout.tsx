// File path: src/components/common/Layout.tsx

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : true;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display flex flex-col transition-colors duration-300" style={{ overflowX: 'clip' }}>
      <Navbar dark={dark} onToggleDark={toggleDark} />
      <main className="flex-1 pt-16 md:pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
