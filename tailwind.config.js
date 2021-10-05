module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#663399",
          secondary: "#bc027f",
          tertiary: "#f67300",
        },
      },
      gridTemplateColumns: {
        auto1fr: ["auto 1fr"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
