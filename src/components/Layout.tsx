import React from 'react';
import '../styles/index.less';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => (
  <>
    <Navigation />
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  </>
);

export default Layout;
