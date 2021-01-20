module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        smaller: '0.8125rem',
        2.375: '2.375rem',
      },
      colors: {
        284: '#284A69',
        354: '#354A69',
        435: '#435A7C',
        569: '#569EFF',
        608: '#6083D6',
        639: '#639AF0',
        688: '#688EE7',
        829: '#829CBF',
        4158: '#41587B',
        5860: '#FF5860',
        23354: '#23354F',
        23365: '#233653',
        41587: '#41587B',
        '1b2': '#1B2A40',
        c8d: '#C8DAF2',
        d6e: '#D6E3EF',
        dc7: '#DC7E94',
        e172: '#E1728D',
        f0f: '#F0F5FA',
        white: '#FFFFFF',
      },
      spacing: {
        1.125: '1.125rem',
        1.625: '1.625rem',
        2.125: '2.125rem',
        2.875: '2.875rem',
        3.875: '3.875rem',
        5.75: '5.75rem',
        30: '7.5rem',
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
        filter: 'filter',
        bottom: 'bottom',
      },
    },
    fontFamily: {
      gilroy: ['Gilroy'],
    },
  },
  variants: {},
  plugins: [],
};
