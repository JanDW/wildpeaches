const colors = require('tailwindcss/colors');

module.exports = {
  //prefix: 't-', /* BEM utility scoping */
  important: true,
  darkMode: 'media',
  purge: ['./.eleventy.js', './src/**/*.html', './src/**/*.md', './src/**/*.json', './lib/shortcodes/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: [''],
      mono: [''],
    },
    screens: {
      // media query ems are based on browser setting font size value, NOT :root/html
      sm: '40em', // 640px
      md: '64em', // 1024px
      lg: '80em', // 1280px
    },
    colors: {
      gray: colors.warmGray,
      blue: colors.blue,
      white: colors.white,
      green: colors.green,
      red: colors.red,
      teal: colors.teal,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
    },
    extend: {
      screens: {
        print: { raw: 'print' },
        // => @media  print { ... }
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  corePlugins: {},
  plugins: [],
};
