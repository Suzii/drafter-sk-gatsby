import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { PRODUCTS_URL } from '../constants/urls';
import { Logo, LogoType } from './Logo';

export const Navigation: React.FC = () => (
  <nav className="nav">
    <Link to="/" className="nav__brand">
      <Logo variant={LogoType.Full} className="nav__brand--logo" />
    </Link>

    <ul className="nav__links" role="navigation">
      <NavItem to={PRODUCTS_URL} isActive>Products</NavItem>
      {/*<NavItem to="#ktoSme" isActive>Kto sme</NavItem>*/}
      {/*<NavItem to="#partneri">Partneri</NavItem>*/}
      {/*<NavItem to="#kontakt">Kontakt</NavItem>*/}
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
