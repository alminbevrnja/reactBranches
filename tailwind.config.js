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
        'mainBlue': '#0D1337',
        'lightBlue': '#0B254B',
        'lightGray': '#f1f1f1'
      }
    },
  },
  plugins: [],
}

