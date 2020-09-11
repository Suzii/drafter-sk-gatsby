import React from 'react';
import { Container, Row, Section, SectionTitle } from '../../_ui-components/Container';
import { WHO_WE_ARE_URL } from '../../constants/urls';

export const WhoWeAreSection: React.FC = () => (
  <Section isFullHeight id={WHO_WE_ARE_URL}>
    <Container>
      <Row>
        <SectionTitle>Kto sme</SectionTitle>
      </Row>
      <Row>
        <p>
          Spoločnosť DRAFTER,s.r.o. Vám ponúka široký sortiment potravinárskych výrobkov, zameraný hlavne na syrové špeciaity.
        </p>
        <p>
          Z našej ponuky si môžete vybrať výrobky z kravského, ovčieho ako aj z kozieho mlieka od našich výrobcov, šikovných farmárov ale aj od top zahraničných producentov. Okrem mliečnych výrobkov u nás nájdete aj mäsové výrobky spoločnosti Mäsovýroba Hôrka, ktorá vsadila na ich tradičné a poctivé spracovanie. Od roku 2017 dovážame do Slovenskej republiky špičkové produkty od spoločnosti TRGOPPRODUCT z Macedónska pod ich exkluzívnou značkou <a href="/files/mamas_v2.pdf" target='_blank'>MAMA´S</a>. Ide o pochutiny ako je Ajvar, Zelený ajvar, Lutenica a ďalšie.
        </p>
        <p>
          Náš tovar dodávame do obchodných sietí v Slovenskej republike, Českej republike a v Maďarsku, ako aj do nezávislých sietí, obchodov a špecializovaných predajní. Portfólio tovaru neustále dopĺňame a vyberáme pre Vás len to najlepšie zo Slovenska a zahraničia. O naše dlhoročné skúsenosti v mliekárenskej výrobe a obchode sa radi podelíme so začínajúcimi výrobcami formou poradenstva.
        </p>
      </Row>
      <Row>
        {features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </Row>
      <Row>
        <p>
          <b>Radi Vás privítame do rodiny našich spokojných zákazníkov.</b>
        </p>
      </Row>
    </Container>
  </Section>
);

type FeatureType = Readonly<{ title: string; icon: string; }>;
const features: readonly FeatureType[] = [
  {title: 'Dlhoročné skúsenosti', icon: '.fas.fa-4x.fa-thumbs-up'},
  {title: 'Férový prístup', icon: '.fas.fa-4x.fa-handshake'},
  {title: 'Spokojní zákazníci', icon: '.fas.fa-4x.fa-users'},
];

const Feature: React.FC<{readonly feature: FeatureType}> = ({ feature: { title, icon } }) => (
  <div>
    <i className={icon} />
    <h4>{title}</h4>
  </div>
);
