module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        smaller: '0.8125rem',
      },
      colors: {
        829: '#829CBF',
        284: '#284A69',
        5860: '#FF5860',
        569: '#569EFF',
        d6e: '#D6E3EF',
        f0f: '#F0F5FA',
        white: '#FFFFFF',
      },
      spacing: {
        1.125: '1.125rem',
        1.625: '1.625rem',
        2.125: '2.125rem',
        34: '8.5rem',
        46: '11.5rem',
        62: '15.5rem',
      },
      lineHeight: {
        4.07: '1.07rem',
      },
      letterSpacing: {
        0.5: '0.5px',
      },
      minHeight: {
        40: '10rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
    fontFamily: {
      gilroy: ['Gilroy'],
    },
  },
  variants: {},
  plugins: [],
};
