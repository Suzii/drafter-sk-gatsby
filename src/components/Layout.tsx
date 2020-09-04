import React from 'react';
import '../styles/index.less';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default Layout;
