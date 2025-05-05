/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9BD3B7',
        secondary: '#F8B6B3',
        accent: '#FFE5D9',
      },
    },
  },
  plugins: [],
};