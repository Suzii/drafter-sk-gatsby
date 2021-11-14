// import '@kentico/kontent-smart-link/dist/kontent-smart-link.styles.css';
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { KontentSmartLinksToggle } from '../_ui-components/kontentSmartlink/KontentSmartLinksToggle';
import { sitemap } from '../constants/urls';
import { GlobalStyle } from '../styles/GlobalStyle';
import { isPreviewEnv } from '../utils/featureToggles';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <GlobalStyle />
      <Grid container direction="column" style={{ height: '100%', minHeight: '100vh' }}>
        <Navigation sitemap={sitemap} />
        <main className="w-full">
          {children}
        </main>
        <Footer sitemap={sitemap} />
      </Grid>
      {isPreviewEnv && <KontentSmartLinksToggle />}
    </div>
  );
};

export default Layout;
