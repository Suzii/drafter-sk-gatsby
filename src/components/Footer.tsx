import { Link } from 'gatsby';
import { darken, lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { EmailLink } from '../_ui-components/EmailLink';
import { Icon } from '../_ui-components/Icon';
import { developerContact, primaryContact } from '../constants/contacts';
import { Sitemap } from '../constants/urls';

export const Footer: React.FC<{ sitemap: Sitemap }> = ({ sitemap }) => (
  <FooterStyled>
    <FooterPrimary>
      <div>
        <FooterSitemap sitemap={sitemap} />
      </div>
      <div>
        <FooterContact />
      </div>
    </FooterPrimary>

    <FooterSecondary>
      Created by&nbsp;<EmailLink email={developerContact.email}>{developerContact.name}</EmailLink>&nbsp;{new Date().getFullYear()}
    </FooterSecondary>
  </FooterStyled>
);

const FooterSitemap: React.FC<{ sitemap: Sitemap }> = ({ sitemap }) => (
  <ul>
    {sitemap.map((node, index) => (
      node.isVisible && (
        <li key={index}>
          <Link to={node.url}>
            {node.title}
          </Link>
        </li>
      )
    ))}
  </ul>
);

const FooterContact: React.FC = () => (
  <ul>
    <li>
      <Icon type={'email'} />&nbsp;
      <EmailLink email={primaryContact.email} />
    </li>
    <li>
      <Icon type={'phone'} />&nbsp;
      {primaryContact.phone}
    </li>
  </ul>
);


const FooterStyled = styled.footer`
  padding: 0;
  width: 100%;
  margin-top: auto;
`;

const FooterPrimary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  background-color: ${p => lighten(0.05, p.theme.palette.secondary.main)};
  color: ${p => p.theme.palette.primary.main};
  line-height: 1.5rem;

  a {
    color: ${p => p.theme.palette.primary.main};
    text-decoration: none;

    &:hover {
      color: ${p => p.theme.palette.primary.main};
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-top: 0.5rem;
    }
  }
`;

const FooterSecondary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  text-align: center;
  background-color: ${p => p.theme.palette.secondary.main};
  color: ${p => darken(0.1, p.theme.palette.primary.main)};

  a {
    color: ${p => darken(0.1, p.theme.palette.primary.main)};

    &:hover {
      color: ${p => p.theme.palette.primary.main};
    }
  }
`;
