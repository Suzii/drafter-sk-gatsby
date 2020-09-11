import React from 'react';
import styled from 'styled-components';
import { Container, Row, Section, SectionTitle, Stack } from '../../_ui-components/Container';
import { EmailLink } from '../../_ui-components/EmailLink';
import { NonBreakable } from '../../_ui-components/NonBreakable';
import { CompanyInfo, companyInfo, Contact, primaryContact, secondaryContact } from '../../constants/contacts';
import { CONTACT_URL } from '../../constants/urls';
import { stripSlashes } from '../../utils/urlUtils';

export const ContactSection: React.FC = () => (
  <Section id={stripSlashes(CONTACT_URL)} isInverted>
    <Container>
      <Stack>
        <Row>
          <SectionTitle>Kontakt</SectionTitle>
        </Row>
        <Row>
          <PersonsStyled>
            <Person title="Konateľ:" person={primaryContact} />
            <Person title="Obchodný zástupca:" person={secondaryContact} />
          </PersonsStyled>
        </Row>
        <SeparatorStyled />
        <Row>
          <CompanyInfoStyled info={companyInfo} />
        </Row>
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
  color: ${p => p.theme.colors.secondary};
  
  & > * {
    display: flex;
    padding: 0.5rem;
  }

  a {
    color: ${p => p.theme.colors.secondary};
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
  <div>
    <ul>
      <li>{title}</li>
      <li>
        <i className="fas fa-fw fa-address-card" />
        <b>{person.name}</b>
      </li>
      <li>
        <i className="fas fa-fw fa-envelope" />
        <EmailLink email={person.email} />
      </li>
      {person.phone && (
        <li>
          <i className="fas fa-fw phone" />
          <NonBreakable>{person.phone}</NonBreakable>
        </li>
      )}
    </ul>
  </div>
);

const CompanyInfoComponent: React.FC<{ readonly info: CompanyInfo }> = ({ info }) => (
  <DlStyled>
    <DdStyled>Adresa</DdStyled>
    <DtStyled>
      {info.address.line1}
      <br />
      {info.address.line2}, {info.address.line3}
    </DtStyled>

    <DdStyled>Email</DdStyled>
    <DtStyled>
      <EmailLink email={info.email} />
    </DtStyled>

    <DdStyled>IČO</DdStyled>
    <DtStyled>{info.ico}</DtStyled>

    <DdStyled>DIČ</DdStyled>
    <DtStyled>{info.dic}</DtStyled>

    <DdStyled>IČ DPH</DdStyled>
    <DtStyled>{info.icDph}</DtStyled>
  </DlStyled>
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

const DtStyled = styled.dt`
  flex: 0 0 45%;
  margin-left: auto;
  margin-right: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
`;

const DdStyled = styled.dd`
  flex: 0 0 45%;
  margin-left: auto;
  margin-right: auto;
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: ${p => p.theme.fontWeight.bolder};
`;

const SeparatorStyled = styled.hr`
  width: 100%;
  color: ${p => p.theme.colors.secondary};
  border: 0;
  height: 1px;
  background: ${p => p.theme.colors.secondary};
`;
