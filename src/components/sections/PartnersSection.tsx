import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, Stack } from '../../_ui-components/Container';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
import { OutwardLink } from '../../_ui-components/OutwardLink';
import { PartnerType } from '../../models/partners';
import { PARTNERS_FRAGMENT } from '../../constants/urls';

type PartnersSectionProps = {
  readonly partners: ReadonlyArray<PartnerType>;
};

export const PartnersSection: React.FC<PartnersSectionProps> = ({partners}) => (
  <Section id={PARTNERS_FRAGMENT} variant="gray">
    <Container maxWidth="xl">
      <Stack>
        <SectionTitle>Partneri</SectionTitle>
        <Typography variant="body1" align="center" gutterBottom>
          Po kliknutí na logo budete presmerovaný na stránky partnera, kde si môžete pozrieť ich výrobky.
        </Typography>
        <Partners>
          {partners.map((partner, index) => (
            <Partner partner={partner} key={index} />
          ))}
        </Partners>
      </Stack>
    </Container>
  </Section>
);

const Partner: React.FC<{ readonly partner: PartnerType }> = ({ partner }) => (
  <PartnerStyled {...getKontentAttrs(partner.id, 'logo')}>
    <OutwardLink
      href={partner.link.url}
      title={partner.title.value}
    >
      <img
        src={partner.logo.imgSrc}
        alt={partner.title.value}
      />
    </OutwardLink>
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

  &:hover {
    transform: translate(0%, -10%);
    transition: 0.3s ease-out;
  }
`;
