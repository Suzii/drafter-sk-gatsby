import React from 'react';
import { ThemeProvider } from 'styled-components';
import { sitemap } from '../constants/urls';
import '../styles/font-face.css';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation sitemap={sitemap} />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
