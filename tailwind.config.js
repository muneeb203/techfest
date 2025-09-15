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
      boxShadow: {
        neon: '0 0 8px 2px rgba(6, 182, 212, 0.7), 0 0 20px 4px rgba(6, 182, 212, 0.5)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
