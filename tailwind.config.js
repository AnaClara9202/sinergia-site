/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5BC0EB',
          light: '#A8D8EA',
          pale: '#E8F4FD',
          deep: '#0B3D5B',
          dark: '#1A2B3C',
          muted: '#3A7CA5',
        },
        offwhite: '#F7FBFE',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      transitionTimingFunction: {
        'sinergia': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
