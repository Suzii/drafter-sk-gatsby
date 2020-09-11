import { Link } from 'gatsby';
import { darken, lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { EmailLink } from '../_ui-components/EmailLink';
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
      <EmailLink email={primaryContact.email} />
    </li>
    <li>
      {primaryContact.phone}
    </li>
  </ul>
);


const FooterStyled = styled.footer`
  padding: 0;
  width: 100%;
`;

const FooterPrimary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  background-color: ${p => lighten(0.05, p.theme.colors.secondary)};
  color: ${p => p.theme.colors.primary};
  line-height: 1.5rem;

  a {
    color: ${p => p.theme.colors.primary};
    text-decoration: none;

    &:hover {
      color: ${p => p.theme.colors.primary};
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
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => darken(0.1, p.theme.colors.primary)};

  a {
    color: ${p => darken(0.1, p.theme.colors.primary)};

    &:hover {
      color: ${p => p.theme.colors.primary};
    }
  }
`;
