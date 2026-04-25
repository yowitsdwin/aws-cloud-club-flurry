/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a60b8',
          dark: '#2577d4',
        },
        'text-main': '#0d2845',
        'text-muted': 'rgba(31, 66, 100, 0.5)',
        'bg-light': '#F9FAFB',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [],
}
