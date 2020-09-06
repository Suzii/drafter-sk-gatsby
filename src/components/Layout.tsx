import React from 'react';
import { ThemeProvider } from 'styled-components';
import { sitemap } from '../constants/urls';
import '../styles/index.less';
import { theme } from '../styles/theme';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <Navigation sitemap={sitemap} />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
