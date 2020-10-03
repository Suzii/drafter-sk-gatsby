import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Section, SectionTitle, Stack } from '../../_ui-components/Container';
import { partners, PartnerType } from '../../constants/partners';
import { PARTNERS_FRAGMENT } from '../../constants/urls';

export const PartnersSection: React.FC = () => (
  <Section id={PARTNERS_FRAGMENT} color="gray">
    <Container>
      <Stack>
        <Row>
          <SectionTitle>Partneri</SectionTitle>
        </Row>
        <Row>
          <Stack>
            <Typography variant="body1" align="center" gutterBottom>
              Po kliknutí na logo budete presmerovaný na stránky partnera, kde si môžete prozrieť ich výrobky.
            </Typography>
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
  margin-top: 2rem;
`;

const PartnerStyled = styled.div`
  margin: 0.5rem 1rem;
  img {
    max-height: 6rem;
    max-width: 12rem;
  }
`;