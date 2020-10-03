import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { SvgIconComponent } from '@material-ui/icons';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Group from '@material-ui/icons/Group';
import ThumbUp from '@material-ui/icons/ThumbUp';
import React from 'react';
import { Row, Section, SectionTitle, Stack } from '../../_ui-components/Container';
import { WHO_WE_ARE_FRAGMENT } from '../../constants/urls';

export const WhoWeAreSection: React.FC = () => (
  <Section isFullHeight id={WHO_WE_ARE_FRAGMENT}>
    <Container maxWidth="md">
      <Stack>
        <Row>
          <SectionTitle>Kto sme</SectionTitle>
        </Row>
        <Row>
          <Typography variant="body1">
            <p>
              Spoločnosť DRAFTER,s.r.o. Vám ponúka široký sortiment potravinárskych výrobkov, zameraný hlavne na syrové
              špeciaity.
            </p>
            <p>
              Z našej ponuky si môžete vybrať výrobky z kravského, ovčieho ako aj z kozieho mlieka od našich výrobcov,
              šikovných farmárov ale aj od top zahraničných producentov. Okrem mliečnych výrobkov u nás nájdete aj
              mäsové
              výrobky spoločnosti Mäsovýroba Hôrka, ktorá vsadila na ich tradičné a poctivé spracovanie. Od roku 2017
              dovážame do Slovenskej republiky špičkové produkty od spoločnosti TRGOPPRODUCT z Macedónska pod ich
              exkluzívnou značkou <a href="/files/mamas_v2.pdf" target='_blank'>MAMA´S</a>. Ide o pochutiny ako je
              Ajvar,
              Zelený ajvar, Lutenica a ďalšie.
            </p>
            <p>
              Náš tovar dodávame do obchodných sietí v Slovenskej republike, Českej republike a v Maďarsku, ako aj do
              nezávislých sietí, obchodov a špecializovaných predajní. Portfólio tovaru neustále dopĺňame a vyberáme pre
              Vás len to najlepšie zo Slovenska a zahraničia. O naše dlhoročné skúsenosti v mliekárenskej výrobe a
              obchode
              sa radi podelíme so začínajúcimi výrobcami formou poradenstva.
            </p>
          </Typography>
        </Row>
        <Row>
          <Typography variant="subtitle1">
            <p>Radi Vás privítame do rodiny našich spokojných zákazníkov.</p>
          </Typography>
        </Row>
      </Stack>
      <Grid container justify={'space-between'}>
        {features.map((feature, index) => (
          <Grid container item sm={12} md={4} key={index} alignItems={'center'} direction={'column'} justify={'center'}>
            <feature.icon color="secondary" fontSize={'large'} />
            <Typography variant="subtitle1" color="secondary">{feature.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

type FeatureType = Readonly<{ title: string; icon: SvgIconComponent; }>;
const features: readonly FeatureType[] = [
  { title: 'Dlhoročné skúsenosti', icon: AccountBalance },
  { title: 'Férový prístup', icon: ThumbUp },
  { title: 'Spokojní zákazníci', icon: Group },
];
