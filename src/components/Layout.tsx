import KontentSmartLink from '@kentico/kontent-smart-link';
import '@kentico/kontent-smart-link/dist/kontent-smart-link.styles.css';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Main } from '../_ui-components/Container';
import { PreviewLinksToggle } from '../_ui-components/PreviewLinksToggle';
import { sitemap } from '../constants/urls';
import '../styles/font-face.css';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <div
      data-kontent-project-id={process.env.GATSBY_KONTENT_PROJECT_ID}
      data-kontent-language-codename={process.env.GATSBY_KONTENT_LANGUAGE_CODENAMES}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation sitemap={sitemap} />
        <Main>
          {children}
        </Main>
        <Footer sitemap={sitemap} />
        <PreviewLinksToggle />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
