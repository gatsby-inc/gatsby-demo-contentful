module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    minHeight: {
      '50vh': '50vh',
    },
    extend: {
      colors: {
        brand: {
          primary: '#663399',
          secondary: '#bc027f',
          tertiary: '#f67300',
          highlight: '#f6edfa',
        },
      },
      fontSize: {
        xxs: '.6rem',
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
