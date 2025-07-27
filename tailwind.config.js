/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via class
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
      },
    },
  },
  plugins: [],
};
