// import '@kentico/kontent-smart-link/dist/kontent-smart-link.styles.css';
import React from 'react';
import { KontentSmartLinksToggle } from '../_ui-components/kontentSmartlink/KontentSmartLinksToggle';
import { sitemap } from '../constants/urls';
import { GlobalStyle } from '../styles/GlobalStyle';
import { isPreviewEnv } from '../utils/featureToggles';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-full">
      <GlobalStyle />
      <div className="grid w-full h-full min-h-screen">
        <Navigation sitemap={sitemap} />
        <main className="w-full">
          {children}
        </main>
        <Footer sitemap={sitemap} />
      </div>
      {isPreviewEnv && <KontentSmartLinksToggle />}
    </div>
  );
};

export default Layout;
