module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extends: {
      width: {
        '3/15': '15%',
        '26': '26%',
        '1/7': '21.666667%',
      }
    },

    letterSpacing: {
      widest: '0.5em',
     },

     screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  // daisyui: {
  //   styled: false,
  // },
}
