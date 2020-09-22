import 'styled-components';
import { Theme } from '../styles/theme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
  }
  interface ThemeOptions {
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface CommonColors {
    white: string;
    lightGray: string;
    lighterGray: string;
    darkerGray: string;
    darkGray: string;
    black: string;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}
