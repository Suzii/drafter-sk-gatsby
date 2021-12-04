const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        headings: ['Titillium Web', 'Open Sans'],
      },
      colors: {
        gray: colors.warmGray,
        primary: {
          light: '#ffde8e',
          lighter: '#ffd33c',
          DEFAULT: '#ffc914',
          darker: '#d2a30c',
          dark: '#917108',
        },
        secondary: {
          light: '#457a3a',
          lighter: '#325c29',
          DEFAULT: '#26471f',
          darker: '#1d3817',
          dark: '#1b3316',
        },
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '8rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
