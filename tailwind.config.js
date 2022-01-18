module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bl: {
          'dark-blue': '#00315F',
          'light-blue': '#009CD0'
        }
      },
      zIndex: {
        "-1": "-1",
      },
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
    extend: {
      backgroundColor: ['group-focus']
    },
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
