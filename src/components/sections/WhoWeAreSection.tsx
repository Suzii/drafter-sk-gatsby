import React from 'react';
import { Section, SectionPara, SectionSubtitle, SectionTitle } from '../../_ui-components/Container';
import { Icon, IconType } from '../../_ui-components/Icon';
import { OutwardLink } from '../../_ui-components/OutwardLink';
import { MAMAS_PDF_LINK, WHO_WE_ARE_FRAGMENT } from '../../constants/urls';

export const WhoWeAreSection: React.FC = () => (
  <Section id={WHO_WE_ARE_FRAGMENT} className="bg-gray-100">
    <div className="container-fluid space-y-md">
      <SectionTitle>Kto sme</SectionTitle>
      <SectionPara>
        Spoločnosť DRAFTER,&nbsp;s.r.o. Vám ponúka široký sortiment potravinárskych výrobkov, zameraný hlavne na syrové
        špeciaity.
      </SectionPara>
      <SectionPara>
        Z našej ponuky si môžete vybrať výrobky z kravského, ovčieho ako aj z kozieho mlieka od našich výrobcov,
        šikovných farmárov ale aj od top zahraničných producentov. Okrem mliečnych výrobkov u nás nájdete aj
        mäsové
        výrobky spoločnosti Mäsovýroba Hôrka, ktorá vsádza na ich tradičné a poctivé spracovanie. Od roku 2017
        dovážame do Slovenskej republiky špičkové produkty od spoločnosti TRGOPPRODUCT z Macedónska pod ich
        exkluzívnou značkou <OutwardLink href={MAMAS_PDF_LINK}>MAMA´S</OutwardLink>. Ide o pochutiny ako je
        Ajvar, Zelený ajvar, Lutenica a ďalšie.
      </SectionPara>
      <SectionPara>
        Náš tovar dodávame do obchodných sietí v Slovenskej republike, Českej republike a v Maďarsku, ako aj do
        nezávislých sietí, obchodov a špecializovaných predajní. Portfólio tovaru neustále dopĺňame a vyberáme pre
        Vás len to najlepšie zo Slovenska a zahraničia. O naše dlhoročné skúsenosti v mliekárenskej výrobe a
        obchode sa radi podelíme so začínajúcimi výrobcami formou poradenstva.
      </SectionPara>
      <SectionSubtitle>
        Radi Vás privítame do rodiny našich spokojných zákazníkov.
      </SectionSubtitle>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-sm justify-items-center justify-around sm:space-y-md md:space-y-0">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col space-y-sm justify-items-center items-center">
            <span className="text-secondary text-5xl">
              <Icon type={feature.icon} />
            </span>
            <span className="text-secondary text-lg font-bold">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

type FeatureType = Readonly<{ title: string; icon: IconType; }>;
const features: readonly FeatureType[] = [
  { title: 'Dlhoročné skúsenosti', icon: 'experience' },
  { title: 'Férový prístup', icon: 'fair-approach' },
  { title: 'Spokojní zákazníci', icon: 'customers' },
];
