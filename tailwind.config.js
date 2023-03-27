/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const colors = require("tailwindcss/colors");
const customColors = {
  primary: '#6A74CF',
  primaryLight: '#D1AAFF',

  caption: '#7A7A7A',
  captionLight: '#D9D9D9',
  captionDark: '#545353',
  danger: '#FF3B3B',
  light: '#F9F9F9',
  body: '#181818',
  titr: '#424242',
  yellowCu: '#FFBF00',
  greenCu: '#22c55e'
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xxs': '360px',
      'xs': '480px',
      'sm': '600px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    colors: {
      ...colors,
      ...customColors
    },
    fontSize: {
      'xxs': '.75rem',
      'xs': '.8125rem',
      'sm': '.875rem',
      'tiny': '.9375rem',
      'base': '1rem',
      'md': '1.0625rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      'title': '1.625rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4/3xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      boxShadow: {
        card: '0px 0px 10px rgba(90, 75, 75, 0.1), 0px 1px 1px rgba(90, 75, 75, 0.03), 0px 2px 3px rgba(90, 75, 75, 0.04)',
        top: '0 -4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1)',
        bottom: '0px 1px 7px -4px rgba(0, 0, 0, 0.48)'
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, matchComponents, theme }) {
      addComponents({
        ':root': {
          ...mapColors(customColors)
        }
      });
    })
  ],
}

const mapColors = (colors) => {
  let object = {};
  for (let item in colors) {
    object[`--color-${item} `] = colors[item]
  }
  return object
}

