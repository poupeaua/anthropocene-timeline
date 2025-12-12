/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./layouts/**/*.{html,js}",  // Hugo templates
    "./content/**/*.{html,md}",  // Markdown or embedded HTML
    "./assets/**/*.{html,js}",   // Assets with embedded Tailwind
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('preline/plugin')
  ]
};