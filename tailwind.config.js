module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
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
