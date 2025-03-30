/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira-code)'],
      },
      colors: {
        primary: '#0a192f',
        secondary: '#64ffda',
        navy: {
          light: '#172a45',
          DEFAULT: '#0a192f',
          dark: '#020c1b',
        },
        slate: {
          light: '#a8b2d1',
          DEFAULT: '#8892b0',
          dark: '#495670',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 