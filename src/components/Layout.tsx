import '../styles/index.less';
import React from 'react';

const Layout: React.FC = ({ children }) => (
  <div style={{ margin: `0 auto`, minWidth: `100%`, padding: `0` }}>
    {children}
  </div>
);

export default Layout;
