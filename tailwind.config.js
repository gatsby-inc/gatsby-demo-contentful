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
        blog: '1fr auto',
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
