import React from 'react';
import styled from 'styled-components';
import { Container, Row, Section, SectionTitle, Stack } from '../../_ui-components/Container';
import { partners, PartnerType } from '../../constants/partners';
import { PARTNERS_URL } from '../../constants/urls';
import { stripSlashes } from '../../utils/urlUtils';

export const PartnersSection: React.FC = () => (
  <Section id={stripSlashes(PARTNERS_URL)}>
    <Container>
      <Stack>
        <Row>
          <SectionTitle>Partneri</SectionTitle>
        </Row>
        <Row>
          <Stack>
            <TagLine>
              Po kliknutí na logo budete presmerovaný na stránky partnera, kde si môžete prozrieť ich výrobky.
            </TagLine>
            <Partners>
              {partners.map((partner, index) => (
                <Partner partner={partner} key={index} />
              ))}
            </Partners>
          </Stack>
        </Row>
      </Stack>
    </Container>
  </Section>
);

const Partner: React.FC<{ readonly partner: PartnerType }> = ({ partner }) => (
  <PartnerStyled>
    <a
      href={partner.link.url}
      title={partner.name}
      target="_blank"
    >
      <img
        src={partner.logo.imgSrc}
        alt={partner.name}
      />
    </a>
  </PartnerStyled>
);

const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const PartnerStyled = styled.div`
  margin: 0.5rem 1rem;
  img {
    max-height: 6rem;
    max-width: 12rem;
  }
`;

const TagLine = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;
