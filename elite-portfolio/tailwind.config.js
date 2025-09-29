/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(0,0,0,0.25)',
        glow: '0 30px 80px -40px rgba(16,185,129,0.5)',
        glass: '0 28px 120px -60px rgba(15,23,42,0.9)',
      },
      backgroundImage: {
        'grid-slate': 'linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(148,163,184,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-slate': '48px 48px',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        floaty: { '0%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' }, '100%': { transform: 'translateY(0)' } },
        aurora: { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
        shimmer: { '0%': { transform: 'translateX(-120%)' }, '100%': { transform: 'translateX(120%)' } },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        aurora: 'aurora 20s ease infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
