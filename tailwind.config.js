module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    // The classes are passed dynamically by Contentful -- don't purge them just because they're not used in the codebase
    safelist: [
      'self-auto',
      'self-start',
      'self-end',
      'self-center',
      'text-left',
      'text-center',
      'text-right',
      'lg:text-left',
      'lg:text-center',
      'lg:text-right',
      'lg:grid-cols-1',
      'lg:grid-cols-2',
      'lg:grid-cols-3',
      'lg:grid-cols-4',
    ],
  },
  darkMode: false,
  theme: {
    minHeight: {
      '25vh': '25vh',
      '50vh': '50vh',
      '75vh': '75vh',
      '100vh': '100vh',
    },
    extend: {
      colors: {
        brand: {
          default: '#663399',
          primary: '#7026B9',
          highlight: '#f6edfa',
        },
      },
      fontSize: {
        xxs: '.6rem',
      },
      gridTemplateColumns: {
        ['auto-1fr']: 'auto 1fr',
        ['1fr-auto']: '1fr-auto',
        blog: '2fr 1fr',
      },
      transitionProperty: {
        left: 'left',
      },
      zIndex: {
        nav: '999',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
