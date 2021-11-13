import classnames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Sitemap } from '../constants/urls';
import { navBarHeight } from '../styles/GlobalStyle';
import { isActive } from '../utils/urlUtils';
import { Logo, LogoType } from './Logo';

export const Navigation: React.FC<{ readonly sitemap: Sitemap }> = ({ sitemap }) => (
  <Nav>
    <LinkStyled to="/">
      <LogoStyled variant={LogoType.Full} />
    </LinkStyled>

    <ul role="navigation">
      {sitemap.map((node, index) =>
        node.isVisible && !node.isIndex && (
          <li key={index}>
            <LinkStyled to={node.url} activeClassName="active" partiallyActive isActive={isActive(node.url)}>
              {node.title}
            </LinkStyled>
          </li>
        ),
      )}
    </ul>
  </Nav>
);

const Nav = styled.nav`
  //position: absolute;
  //top: 0;
  //left: 0;
  //right:0;
  // z-index: ${p => p.theme.zIndex.appBar};
  //
  // width: 100%;
  // min-height: ${navBarHeight};
  // padding: 0;
  // display: flex;
  // flex-wrap: wrap;
  // justify-items: center;
  // align-items: center;
  // justify-content: space-around;
  //
  // background-color: ${p => p.theme.palette.primary.main};
  //
  // ul {
  //   padding: 0;
  //   list-style: none;
  //   display: flex;
  //   flex-direction: row;
  //   justify-items: center;
  //   align-items: center;
  //  
  //   li {
  //     margin-right: 0.5rem;
  //     margin-left: 0.5rem;
  //     text-transform: uppercase;
  //     font-weight: ${p => p.theme.typography.fontWeightBold};
  //     font-size: ${p => p.theme.typography.fontSize}px;
  //   }
  // }
`;

type LinkStyledProps = { readonly isActive?: boolean };

const LinkStyled = styled
(({ isActive, ...rest }) =>
  <Link {...rest} className={classnames(rest.className, isActive && 'active')} />,
)<LinkStyledProps>`
  // text-decoration: none;
  // color: ${props => props.theme.palette.secondary.main};
  //
  // li > &:hover {
  //   color: ${props => props.theme.palette.black};
  //   box-shadow: ${props => props.theme.palette.black};
  //   text-decoration: none;
  //   border-bottom: 0.2rem solid ${props => props.theme.palette.secondary.main};
  // }
  //
  // &.active {
  //   border-bottom: 0.2rem solid ${props => props.theme.palette.secondary.main};
  // }
`;

const LogoStyled = styled(Logo)`
  //width: 200px;
  //fill: #26471F;
  //
  //a:hover {
  //  text-decoration: none;
  //}
`;
