module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-out': {
          '0%': {
            opacity: '0',
          },
          '25%': {
            opacity: '1',
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
        'fade-in-out': 'fade-in-out 3s linear'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
