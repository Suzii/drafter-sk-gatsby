import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { Section, SectionTitle } from '../../_ui-components/Container';
import { ProductCommon } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';
import { ProductDescription } from './ProductDescription';
import { ProductInfo } from './ProductInfo';

type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly product: ProductCommon<TGroupName>;
}

export const ProductDetail = <TGroupName extends AllKnownProductTaxonomies>({ product }: Props<TGroupName>) => (
  <Section data-kontent-item-id={product.id}>
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
        <Img
          data-kontent-element-codename={`image`}
          fluid={product.img?.fluid as FluidObject}
        />
      </Grid>
      <Grid
        item
        xl={8}
        lg={8}
        md={8}
        sm={7}
        xs={12}
      >
        <SectionTitle elementCodename={`name`} center={false}>
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
);
