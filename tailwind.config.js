/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3d00',
          900: '#7c2d12',
          glow: '#ff8a3d',
        },
        navy: {
          950: '#071827',
          900: '#0a1f3d',
          850: '#0d2443',
          800: '#112d4f',
          750: '#163d60',
          700: '#1a496f',
          600: '#1f5a83',
        },
        glass: {
          surface: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(255, 255, 255, 0.1)',
          highlight: 'rgba(6, 182, 212, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'cyan-glow-lg': '0 0 50px -10px rgba(6, 182, 212, 0.5)',
        'glass-card': '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-card-light': '0 20px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      }
    },
  },
  plugins: [],
}
