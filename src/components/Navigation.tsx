import { Link } from 'gatsby';
import React from 'react';
import { Sitemap } from '../constants/urls';
import { isActive } from '../utils/urlUtils';
import { Logo, LogoType } from './Logo';

export const Navigation: React.FC<{ readonly sitemap: Sitemap }> = ({ sitemap }) => (
  <nav className="nav">
    <Link to="/" className="nav__brand">
      <Logo variant={LogoType.Full} className="nav__brand--logo" />
    </Link>

    <ul className="nav__links" role="navigation">
      {sitemap.map((node, index) =>
        node.isVisible && !node.isIndex && (
          <NavItem key={index} to={node.url} isActive={isActive(node.url)}>{node.title}</NavItem>
        ),
      )}
    </ul>
  </nav>
);

const NavItem: React.FC<{
  readonly to: string;
  readonly children: React.ReactNode;
  readonly isActive?: boolean;
}> = ({ to, isActive, children }) => (
  <li>
    <Link to={to} className={isActive ? 'active' : ''}>{children}</Link>
  </li>
);
