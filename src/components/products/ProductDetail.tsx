import { ImageElement } from '@kentico/gatsby-kontent-components';
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Maybe } from '../../@types/global';
import { Section, SectionTitle } from '../../_ui-components/Container';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
import { ProductCommon } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';
import Layout from '../Layout';
import { ProductDescription } from './ProductDescription';
import { ProductInfo } from './ProductInfo';
import { ProductNotFound } from './ProductNotFoud';

type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly product: Maybe<ProductCommon<TGroupName>>;
}

export const ProductDetail = <TGroupName extends AllKnownProductTaxonomies>({ product }: Props<TGroupName>) => {
  if (!product) {
    console.log('Product: no data found');
    return <ProductNotFound />;
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Section>
          <Grid
            container
            spacing={4}
            direction="row"
            alignContent="stretch"
          >
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={5}
              xs={12}
            >
              <ImageElement image={product.img ?? {} as any} />
            </Grid>
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={7}
              xs={12}
            >
              <SectionTitle center={false} {...getKontentAttrs(product.id, 'name')}>
                {product.name}
              </SectionTitle>

              <Typography variant="body1" color="textPrimary" component="div">
                <ProductInfo properties={product.properties} />
              </Typography>

              <Typography variant="body1" component="div">
                <ProductDescription rte={product.description} />
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </Container>
    </Layout>
  );
};
