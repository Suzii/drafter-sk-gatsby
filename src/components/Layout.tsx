import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Main } from '../_ui-components/Container';
import { sitemap } from '../constants/urls';
import '../styles/font-face.css';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation sitemap={sitemap} />
      <Main>
        {children}
      </Main>
      <Footer sitemap={sitemap} />
    </ThemeProvider>
  </>
);

export default Layout;
