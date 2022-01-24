module.exports = {
  // purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/pages/*.{js,ts,jsx,tsx}', './src/components/*.{js,ts,jsx,tsx}'],
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('/img/login-background.png')",
      },
      fontFamily: {
        'asap': ['Asap', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        bl: {
          'dark-blue': '#00315F',
          'light-blue': '#009CD0',
          'background': '#27B3E3',
          'title': '#00A3DA',
          'dark-gray': '#3E3E3E',
          'gray': '#787878'
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
