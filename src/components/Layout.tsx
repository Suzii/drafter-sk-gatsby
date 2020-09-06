import React from 'react';
import '../styles/index.less';
import { sitemap } from '../constants/urls';
import { Navigation } from './Navigation';

const Layout: React.FC = ({ children }) => (
  <>
    <Navigation sitemap={sitemap}/>
    {children}
  </>
);

export default Layout;
