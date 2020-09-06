import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Sitemap } from '../constants/urls';
import { isActive } from '../utils/urlUtils';
import { Logo, LogoType } from './Logo';

export const Navigation: React.FC<{ readonly sitemap: Sitemap }> = ({ sitemap }) => (
  <Nav>
    <LinkStyled to="/">
      <LogoStyled variant={LogoType.Full} />
    </LinkStyled>

    <UlStyled role="navigation">
      {sitemap.map((node, index) =>
        node.isVisible && !node.isIndex && (
          <LiStyled key={index}>
            <LinkStyled to={node.url} activeClassName="active" partiallyActive isActive={isActive(node.url)}>
              {node.title}
            </LinkStyled>
          </LiStyled>
        )
      )}
    </UlStyled>
  </Nav>
);

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right:0;

  width: 100%;
  min-height: 80px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  
  background-color: ${props => props.theme.colors.primary};
`;

type LinkStyledProps = { readonly isActive?: boolean };

const LinkStyled = styled(Link).attrs<LinkStyledProps>(props => ({
  className: props.isActive ? 'active' : '',
}))<LinkStyledProps>`
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  
  li > &:hover {
    color: ${props => props.theme.colors.black};
    box-shadow: ${props => props.theme.colors.black};
    text-decoration: none;
    border-bottom: 0.2rem solid ${props => props.theme.colors.secondary};
  }
  
  &.active {
    border-bottom: 0.2rem solid ${props => props.theme.colors.secondary};
  }
`;

const LogoStyled = styled(Logo)`
  width: 200px;
  fill: #26471F;
  
  a:hover {
    text-decoration: none;
  }
`;

const UlStyled = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;

const LiStyled = styled.li`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
  font-weight: bolder;
`;
