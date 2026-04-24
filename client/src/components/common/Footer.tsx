// File path: src/components/common/Footer.tsx

import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/skills' },
    { label: 'Projects', path: '/case-studies' },
    { label: 'Artifacts', path: '/artifacts' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#111318]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 py-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl overflow-hidden shadow-lg">
                <img src="/logo.png" alt="Woyyuu Tech" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Woyyuu Tech</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400">Senior Software Developer</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              Building scalable solutions with modern web technologies. Available for consulting and full-time opportunities.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/Lemijala" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/lemesa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:tlemesagirma@gmail.com" aria-label="Email"
                className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.path)}
                    className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-slate-600 dark:text-gray-400 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-primary/70">flag</span>
                  Ethiopia
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-600 dark:text-gray-400 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-primary/70">location_on</span>
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li>
                <a href="mailto:tlemesagirma@gmail.com" className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-primary/70">mail</span>
                  tlemesagirma@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+251914625479" className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-primary/70">phone</span>
                  +251 914 625 479
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-[#282e39] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-500 dark:text-gray-400">
            © {currentYear} Lemesa Girma. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <a href="https://github.com/Lemijala" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/lemesa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://tiktok.com/@lemesa" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>
            <a href="https://t.me/lemesa" target="_blank" rel="noopener noreferrer" aria-label="Telegram"
              className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a href="mailto:tlemesagirma@gmail.com" aria-label="Email"
              className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
