import classnames from 'classnames';
import React from 'react';
import { Section, SectionSubtitle, SectionTitle } from '../../_ui-components/Container';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
import { OutwardLink } from '../../_ui-components/OutwardLink';
import { PARTNERS_FRAGMENT } from '../../constants/urls';
import { PartnerType } from '../../models/partners';

type PartnersSectionProps = {
  readonly partners: ReadonlyArray<PartnerType>;
};

export const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => (
  <Section id={PARTNERS_FRAGMENT}>
    <div className="space-y-md">
      <SectionTitle>Partneri</SectionTitle>
      <SectionSubtitle>
        Po kliknutí na logo budete presmerovaný na stránky partnera, kde si môžete pozrieť ich výrobky.
      </SectionSubtitle>
      <div className="flex flex-wrap items-center justify-around">
        {partners.map((partner, index) => (
          <Partner
            partner={partner}
            key={index}
            className="mx-auto"
          />
        ))}
      </div>
    </div>
  </Section>
);

const Partner: React.FC<{ readonly partner: PartnerType; readonly className?: string }> = ({ partner, className }) => (
  <div
    className={classnames('mx-md my-sm transform transition hover:-translate-y-2 ease-out duration-300', className)}
    {...getKontentAttrs(partner.id, 'logo')}
  >
    <OutwardLink
      href={partner.link.url}
      title={partner.title.value}
    >
      <img
        src={partner.logo.imgSrc}
        alt={partner.title.value}
        className="max-h-24 max-w-48"
      />
    </OutwardLink>
  </div>
);

