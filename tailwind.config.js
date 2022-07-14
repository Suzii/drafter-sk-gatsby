const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        headings: ['Titillium Web', 'Open Sans'],
      },
      colors: {
        gray: colors.stone,
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
        navHeight: '4rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
