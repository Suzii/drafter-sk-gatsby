// import '@kentico/kontent-smart-link/dist/kontent-smart-link.styles.css';
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Main } from '../_ui-components/Container';
import { KontentSmartLinksToggle } from '../_ui-components/kontentSmartlink/KontentSmartLinksToggle';
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
        <Grid container direction="column" style={{ height: '100%', minHeight: '100vh' }}>
          <Navigation sitemap={sitemap} />
          <Main>
            {children}
          </Main>
          <Footer sitemap={sitemap} />
        </Grid>
        {isPreviewEnv && <KontentSmartLinksToggle />}
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
