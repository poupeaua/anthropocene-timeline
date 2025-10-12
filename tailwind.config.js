/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/**/*.js',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('preline/plugin')
  ]
};