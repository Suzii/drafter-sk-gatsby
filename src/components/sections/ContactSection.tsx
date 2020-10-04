import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, Stack } from '../../_ui-components/Container';
import { EmailLink } from '../../_ui-components/EmailLink';
import { Icon } from '../../_ui-components/Icon';
import { NonBreakable } from '../../_ui-components/NonBreakable';
import { CompanyInfo, companyInfo, Contact, primaryContact, secondaryContact } from '../../constants/contacts';
import { CONTACT_FRAGMENT } from '../../constants/urls';

export const ContactSection: React.FC = () => (
  <Section id={CONTACT_FRAGMENT} variant="primary">
    <Container maxWidth="md">
      <Stack>
        <SectionTitle>Kontakt</SectionTitle>
        <PersonsStyled>
          <Person title="Konateľ:" person={primaryContact} />
          <Person title="Obchodný zástupca:" person={secondaryContact} />
        </PersonsStyled>
        <SeparatorStyled />
        <CompanyInfoStyled info={companyInfo} />
      </Stack>
    </Container>
  </Section>
);

const PersonsStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  color: ${p => p.theme.palette.secondary.main};
  
  & > * {
    display: flex;
  }

  a {
    color: ${p => p.theme.palette.secondary.main};
  }

  i {
    margin-right: 0.8rem;
    width: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin: 1rem;
  }
`;

const Person: React.FC<{ readonly person: Contact, readonly title: string }> = ({ person, title }) => (
  <Typography variant={'body2'} component="div">
    <ul>
      <li>{title}</li>
      <li>
        <Icon type={'contact-person'} />&nbsp;
        <b>{person.name}</b>
      </li>
      <li>
        <Icon type={'email'}/>&nbsp;
        <EmailLink email={person.email} />
      </li>
      {person.phone && (
        <li>
          <Icon type={'phone'} />&nbsp;
          <NonBreakable>{person.phone}</NonBreakable>
        </li>
      )}
    </ul>
  </Typography>
);

const CompanyInfoComponent: React.FC<{ readonly info: CompanyInfo }> = ({ info }) => (
  <Typography variant={'body2'} component="div">
    <DlStyled>
      <DtStyled>Adresa</DtStyled>
      <DdStyled>
        {info.address.line1}
        <br />
        {info.address.line2}, {info.address.line3}
      </DdStyled>

      <DtStyled>Email</DtStyled>
      <DdStyled>
        <EmailLink email={info.email} />
      </DdStyled>

      <DtStyled>IČO</DtStyled>
      <DdStyled>{info.ico}</DdStyled>

      <DtStyled>DIČ</DtStyled>
      <DdStyled>{info.dic}</DdStyled>

      <DtStyled>IČ DPH</DtStyled>
      <DdStyled>{info.icDph}</DdStyled>
    </DlStyled>
  </Typography>
);

const CompanyInfoStyled = styled(CompanyInfoComponent)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DlStyled = styled.dl`
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  overflow: visible;
  align-content: center;
`;

const DdStyled = styled.dd`
  flex: 0 0 55%;
  margin-left: auto;
  margin-right: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
`;

const DtStyled = styled.dt`
  flex: 0 0 35%;
  margin-left: auto;
  margin-right: auto;
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: ${p => p.theme.typography.fontWeightBold};
`;

const SeparatorStyled = styled.hr`
  width: 100%;
  color: ${p => p.theme.palette.secondary.main};
  border: 0;
  height: 1px;
  background: ${p => p.theme.palette.secondary.main};
`;
