/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Section 1 Colors (light / professional palette)
        "primary": "#2563eb", // blue-600
        "primary-dark": "#1d4ed8", // blue-700
        "secondary": "#0ea5a4", // teal-500
        "background-light": "#ffffff",
        "background-muted": "#f8fafc",
        "background-dark": "#0B1120",
        "surface-dark": "#162032",
        
        // Section 2 Colors
        "text-secondary": "#64748b",
        "border-muted": "#e6edf3",
        "card-light": "#ffffff",
        "card-dark": "#1c1f27"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slow-delayed': 'floatSlow 8s ease-in-out 4s infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'gradient': 'gradientShift 6s ease infinite',
        'spin-slow': 'spin 6s linear infinite',
        'light-beam': 'lightBeam 3s ease-in-out infinite',
        'light-beam-delayed': 'lightBeam 3s ease-in-out infinite 1.5s',
        'marquee-slow': 'marquee 40s linear infinite',
        'marquee-slower': 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        lightBeam: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(100%)' }
        }
      }
    },
  },
  plugins: [],
}