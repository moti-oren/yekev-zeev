/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './**.{html,js}'
  ],
  theme: {
    screens: {
      xs: '850px'
    },
    extend: {
      spacing: {
        124: '32rem',
        128: '38rem',
        130: '44rem'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '10xl': '12rem'
      },
      backgroundImage: {

      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};

// npx tailwindcss -i ./input.css -o ./dist/output.css
