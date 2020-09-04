import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { DrafterLogo, Logo } from './logos/drafter-logo-s';

export const Navigation: React.FC = () => (
  <nav className="nav">
    <Link to="/" className="nav__brand">
      <DrafterLogo variant={Logo.Full} className="nav__brand--logo" />
    </Link>

    <ul className="nav__links" role="navigation">
      <NavItem to="#ktoSme" isActive>Kto sme</NavItem>
      <NavItem to="#partneri">Partneri</NavItem>
      <NavItem to="#kontakt">Kontakt</NavItem>
    </ul>
  </nav>
);

const NavItem: React.FC<{
  readonly to: string;
  readonly children: React.ReactNode;
  readonly isActive?: boolean;
}> = ({ to, isActive, children}) => (
  <li>
    <Link to={to} className={isActive ? 'active' : ''}>{children}</Link>
  </li>
);

const Nav = styled.nav`

`
