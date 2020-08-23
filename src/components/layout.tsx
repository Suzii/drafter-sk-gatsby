import React from 'react';

const Layout: React.FC = ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children}
  </div>
);

export default Layout;
