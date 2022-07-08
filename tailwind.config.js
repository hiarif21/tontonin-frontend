/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      default: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Poppins',
        'Roboto',
        '"Droid Sans"',
        'sans-serif',
      ],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  darkMode: 'class',
};
