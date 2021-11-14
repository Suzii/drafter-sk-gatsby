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
          light: '',
          DEFAULT: '#ffc914',
          dark: '',
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
  plugins: [],
}


/* Old Material UI
// TODO delete
import { createMuiTheme, responsiveFontSizes, TypographyStyle } from '@material-ui/core/styles';

const primaryColor = '#ffc914';
const secondaryColor = '#26471f';
const white = '#fff';
const lightGray = '#eee';
const lighterGray = '#ccc';
const darkerGray = '#999';
const darkGray = '#333';
const black = '#000';

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 600;

export const navBarHeight = '80px';

type HeadingSizes = 1 | 2 | 3 | 4 | 5 | 6;
const headingsSizeMap: Record<HeadingSizes, number> = {
  '1': 3.5,
  '2': 3,
  '3': 2.5,
  '4': 2,
  '5': 1.5,
  '6': 1.3333,
};


const headings = (level: HeadingSizes): TypographyStyle => ({
  fontWeight: fontWeightBold,
  fontSize: `${headingsSizeMap[level]}rem`,
});

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    common: {
      white,
      lightGray,
      lighterGray,
      darkerGray,
      darkGray,
      black,
    },
  },
  typography: {
    fontFamily: 'Titillium Web, Open Sans',
    fontSize: 18,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    h1: headings(1),
    h2: headings(2),
    h3: headings(3),
    h4: headings(4),
    h5: headings(5),
    h6: headings(6),
    subtitle1: {
      fontWeight: fontWeightBold,
    },
  },
}));

theme.spacing(2);

export type Theme = typeof theme;


 */
