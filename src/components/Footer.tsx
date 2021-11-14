import { Link } from 'gatsby';
import React from 'react';
import { EmailLink } from '../_ui-components/EmailLink';
import { Icon } from '../_ui-components/Icon';
import { developerContact, primaryContact } from '../constants/contacts';
import { Sitemap } from '../constants/urls';

export const Footer: React.FC<{ sitemap: Sitemap }> = ({ sitemap }) => (
  <footer className="p-0 mt-auto w-full leading-6">
    <div className="mx-auto py-md flex items-center justify-around bg-secondary-lighter text-primary">
      <div>
        <FooterSitemap sitemap={sitemap} />
      </div>
      <div>
        <FooterContact />
      </div>
    </div>
    <div className="py-xs flex bg-secondary text-primary">
      <div className="mx-auto">
        Created by&nbsp;<EmailLink email={developerContact.email} className="text-primary hover:text-primary-light hover:underline">{developerContact.name}</EmailLink>&nbsp;{new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

const FooterSitemap: React.FC<{ sitemap: Sitemap }> = ({ sitemap }) => (
  <ul>
    {sitemap.map((node, index) => (
      node.isVisible && (
        <li key={index}>
          <Link to={node.url} className="text-primary hover:text-primary-light hover:underline">
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
      <EmailLink email={primaryContact.email} className="text-primary hover:text-primary-light hover:underline" />
    </li>
    <li>
      <Icon type={'phone'} />&nbsp;
      {primaryContact.phone}
    </li>
  </ul>
);
