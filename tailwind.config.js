/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-slate-blue': '#264653',
        'teal-green': '#2A9D8F',
        'golden-yellow': '#E9C46A',
        'pale-orange': '#F4A261',
        'sienna-orange': '#772F1A',
      },
    },
  },
  plugins: [],
}