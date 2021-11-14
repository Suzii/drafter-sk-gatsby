import React from 'react';
import { Section, SectionTitle } from '../../_ui-components/Container';
import { EmailLink } from '../../_ui-components/EmailLink';
import { Icon } from '../../_ui-components/Icon';
import { NonBreakable } from '../../_ui-components/NonBreakable';
import { CompanyInfo, companyInfo, Contact, primaryContact, secondaryContact } from '../../constants/contacts';
import { CONTACT_FRAGMENT } from '../../constants/urls';

export const ContactSection: React.FC = () => (
  <Section id={CONTACT_FRAGMENT} className="bg-primary leading-8 text-secondary-darker">
    <div className="container-fluid space-y-md">
      <SectionTitle>Kontakt</SectionTitle>
      <div className="flex flex-wrap flex-row justify-evenly">
        <Person title="Konateľ:" person={primaryContact} />
        <Person title="Spolumajiteľ:" person={secondaryContact} />
      </div>
      <hr className="h-0.5 text-secondary-darker bg-secondary-darker border-0" />
      <CompanyInfoComponent info={companyInfo} />
    </div>
  </Section>
);

const Person: React.FC<{ readonly person: Contact, readonly title: string }> = ({ person, title }) => (
  <div className="">
    <ul>
      <li>{title}</li>
      <li>
        <Icon type="contact-person" />&nbsp;
        <b>{person.name}</b>
      </li>
      <li>
        <Icon type="email" />&nbsp;
        <EmailLink email={person.email} className="text-secondary-dark" />
      </li>
      {person.phone && (
        <li>
          <Icon type="phone" />&nbsp;
          <NonBreakable>{person.phone}</NonBreakable>
        </li>
      )}
    </ul>
  </div>
);

const CompanyInfoComponent: React.FC<{ readonly info: CompanyInfo }> = ({ info }) => (
  <div className="w-full flex justify-center">
    <dl className="w-full flex flex-col">
      <div className="flex">
        <DtStyled>Adresa</DtStyled>
        <DdStyled>
          {info.address.line1}
          <br />
          {info.address.line2}, {info.address.line3}
        </DdStyled>
      </div>

      <div className="flex">
        <DtStyled>Email</DtStyled>
        <DdStyled>
          <EmailLink email={info.email} className="text-secondary-dark" />
        </DdStyled>
      </div>

      <div className="flex">
        <DtStyled>IČO</DtStyled>
        <DdStyled>{info.ico}</DdStyled>
      </div>

      <div className="flex">
        <DtStyled>DIČ</DtStyled>
        <DdStyled>{info.dic}</DdStyled>
      </div>

      <div className="flex">
        <DtStyled>IČ DPH</DtStyled>
        <DdStyled>{info.icDph}</DdStyled>
      </div>
    </dl>
  </div>
);

const DdStyled: React.FC = ({ children }) => (
  <dd className="mx-sm overflow-ellipsis text-left w-1/2">
    {children}
  </dd>
);
const DtStyled: React.FC = ({ children }) => (
  <dt className="overflow-ellipsis text-right font-bold w-1/2">
    {children}
  </dt>
);
