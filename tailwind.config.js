/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F8CFF',
        accent: '#FFD84D',
        coral: '#FF7A7A',
        bg: '#F9FBFF',
        navy: '#1E2A38',
      },
      fontFamily: {
        heading: ['Poppins', 'Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #F9FBFF 0%, #E8F0FE 50%, #F9FBFF 100%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
        'grid-pattern-dark': 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
