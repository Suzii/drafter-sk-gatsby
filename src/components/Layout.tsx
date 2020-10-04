import '@kentico/kontent-smart-link/dist/kontent-smart-link.styles.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Main } from '../_ui-components/Container';
import { PreviewLinksToggle } from '../_ui-components/PreviewLinksToggle';
import { sitemap } from '../constants/urls';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { isPreviewEnv } from '../utils/featureToggles';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Navigation sitemap={sitemap} />
        <Main>
          {children}
        </Main>
        <Footer sitemap={sitemap} />
        {isPreviewEnv && <PreviewLinksToggle />}
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
