const { sign } = require('jsonwebtoken');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
        signika_bold : ['Signika-Bold','sans-serif']
      },
      
    },
  },
  plugins: [],
}

