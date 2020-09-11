export const theme = {
  colors: {
    primary: '#ffc914',
    secondary: '#26471F',
    white: '#fff',
    lightGray: '#eee',
    lighterGray: '#ccc',
    darkerGray: '#999',
    darkGray: '#333',
    black: '#000',
  },
  fontWeight: {
    lighter: 200,
    normal: 400,
    bolder: 600,
    bold: 700,
  },
  media: {
    xxs: '380px',
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  zIndex: {
    z100: '100',
    z200: '200',
    z300: '300',
    z400: '400',
    z500: '500',
    z600: '600',
    z700: '700',
    z800: '800',
    z900: '900',
  }
};

export type Theme = typeof theme;
