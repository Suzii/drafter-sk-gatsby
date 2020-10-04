import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Section, SectionTitle, Stack } from '../../_ui-components/Container';
import { Icon, IconType } from '../../_ui-components/Icon';
import { OutwardLink } from '../../_ui-components/OutwardLink';
import { MAMAS_PDF_LINK, WHO_WE_ARE_FRAGMENT } from '../../constants/urls';

export const WhoWeAreSection: React.FC = () => (
  <Section isFullHeight id={WHO_WE_ARE_FRAGMENT}>
    <Container maxWidth="md">
      <Stack>
        <SectionTitle>Kto sme</SectionTitle>
        <Typography variant="body1" paragraph>
          Spoločnosť DRAFTER,s.r.o. Vám ponúka široký sortiment potravinárskych výrobkov, zameraný hlavne na syrové
          špeciaity.
        </Typography>
        <Typography variant="body1" paragraph>
          Z našej ponuky si môžete vybrať výrobky z kravského, ovčieho ako aj z kozieho mlieka od našich výrobcov,
          šikovných farmárov ale aj od top zahraničných producentov. Okrem mliečnych výrobkov u nás nájdete aj
          mäsové
          výrobky spoločnosti Mäsovýroba Hôrka, ktorá vsadila na ich tradičné a poctivé spracovanie. Od roku 2017
          dovážame do Slovenskej republiky špičkové produkty od spoločnosti TRGOPPRODUCT z Macedónska pod ich
          exkluzívnou značkou <OutwardLink href={MAMAS_PDF_LINK}>MAMA´S</OutwardLink>. Ide o pochutiny ako je
          Ajvar,
          Zelený ajvar, Lutenica a ďalšie.
        </Typography>
        <Typography variant="body1" paragraph>
          Náš tovar dodávame do obchodných sietí v Slovenskej republike, Českej republike a v Maďarsku, ako aj do
          nezávislých sietí, obchodov a špecializovaných predajní. Portfólio tovaru neustále dopĺňame a vyberáme pre
          Vás len to najlepšie zo Slovenska a zahraničia. O naše dlhoročné skúsenosti v mliekárenskej výrobe a
          obchode
          sa radi podelíme so začínajúcimi výrobcami formou poradenstva.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Radi Vás privítame do rodiny našich spokojných zákazníkov.
        </Typography>
      </Stack>
      <Grid container justify={'space-between'}>
        {features.map((feature, index) => (
          <Grid container item sm={12} md={4} key={index} alignItems={'center'} direction={'column'} justify={'center'}>
            <Typography variant="h1" color="secondary" component="span">
              <Icon type={feature.icon} />
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              {feature.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

type FeatureType = Readonly<{ title: string; icon: IconType; }>;
const features: readonly FeatureType[] = [
  { title: 'Dlhoročné skúsenosti', icon: 'experience' },
  { title: 'Férový prístup', icon: 'fair-approach' },
  { title: 'Spokojní zákazníci', icon: 'customers' },
];
