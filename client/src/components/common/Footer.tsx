// File path: src/components/common/Footer.tsx

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#skills' },
    { label: 'Projects', href: '#case-studies' },
    { label: 'Artifacts', href: '#artifacts' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'Technical Consulting', icon: 'business_center' },
    { label: 'Web Development', icon: 'code' },
    { label: 'Mentorship', icon: 'school' },
    { label: 'Speaking Engagements', icon: 'mic' },
  ];

  const techStack = ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GraphQL'];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#111318]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 py-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-white">terminal</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">LemiTech</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400">Systems Architecture</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              Building scalable solutions with modern web technologies. Available for consulting and full-time opportunities.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="mailto:lemesa@example.com"
                aria-label="Email"
                className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
              >
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
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-slate-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <span className="text-sm text-slate-600 dark:text-gray-400 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-primary/70">{service.icon}</span>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
              Subscribe for tech insights and updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-[#282e39] bg-slate-50 dark:bg-[#111318] text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-[#282e39] my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-slate-900 dark:text-white font-bold text-sm">
              © {currentYear} Lemesa Girma. All rights reserved.
            </span>
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-gray-400">
              <span>Built with React & Node.js</span>
              <span className="hidden sm:inline">•</span>
              <span>TypeScript</span>
              <span className="hidden sm:inline">•</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Sitemap</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-slate-100 dark:bg-[#1c1f27] border border-gray-200 dark:border-[#282e39] rounded-full">
              <span className="text-[10px] font-mono font-medium text-slate-500 dark:text-gray-400">v3.0.1 (stable)</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-gray-400 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
