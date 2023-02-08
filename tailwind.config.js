/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'book': "url('../public/images/backgr.jpg')"
      },
      fontFamily: {
        'serif': ['"Source Serif Pro"', 'serif'],
  
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
