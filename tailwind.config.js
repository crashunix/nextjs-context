module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-out': {
          '0%': {
            opacity: '0',
            translateX: '-100%'
          },
          '25%': {
            opacity: '1',
            translateX: '0'
          },
          '75%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        }
      },
      animation: {
        'fade-in-out': 'fade-in-out 3.1s linear'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
