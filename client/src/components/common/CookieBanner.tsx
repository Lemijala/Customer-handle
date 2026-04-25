// File path: src/components/common/CookieBanner.tsx

import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[100] animate-slide-in">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl shadow-black/20 p-5 flex flex-col gap-4">
        {/* Icon + title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md flex-shrink-0">
            <span className="material-symbols-outlined text-white text-[18px]">cookie</span>
          </div>
          <h3 className="font-black text-slate-900 dark:text-white text-base">We use cookies</h3>
        </div>

        {/* Description */}
        <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
          We use cookies to improve your experience, analyze site traffic, and personalize content. You can accept all cookies or reject non-essential ones.
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={reject}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
