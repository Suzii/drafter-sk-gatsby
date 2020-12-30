import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Maybe } from '../../@types/global';
import { Section, SectionTitle } from '../../_ui-components/Container';
import { Filters, SelectedTermsByGroup, useFilterQuery } from '../../_ui-components/filter/Filters';
import { ProductCommon } from '../../models/product';
import { TaxonomyGroup } from '../../models/taxonomies/_common';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';
import { Feature, isFeatureEnabled } from '../../utils/featureToggles';
import { ProductTile } from './ProductTile';

type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly allProducts: ReadonlyArray<ProductCommon<TGroupName>>;
  readonly productTaxonomies: ReadonlyArray<TaxonomyGroup<TGroupName>>;
}

const satisfiesGroupFilter = <TGroupName extends AllKnownProductTaxonomies>(
  product: ProductCommon<TGroupName>,
  groupCodename: TGroupName,
  selectedTerms: Maybe<ReadonlyArray<string>>
): boolean =>
  !selectedTerms ||
  !selectedTerms.length ||
  selectedTerms.includes(product.properties[groupCodename]?.term?.codename ?? '');

const satisfiesFilter = <TGroupName extends AllKnownProductTaxonomies>(
  product: ProductCommon<TGroupName>,
  selectedTermsByGroup: SelectedTermsByGroup<TGroupName>
): boolean =>
  Object.keys(selectedTermsByGroup).every(groupCodename =>
    satisfiesGroupFilter(product, groupCodename as TGroupName, selectedTermsByGroup[groupCodename as TGroupName]));


const filterProducts = <TGroupName extends AllKnownProductTaxonomies>(
  allProducts: ReadonlyArray<ProductCommon<TGroupName>>,
  selectedTermsByGroup: SelectedTermsByGroup<TGroupName>
): ReadonlyArray<ProductCommon<TGroupName>> => allProducts.reduce(
  (agg: ReadonlyArray<ProductCommon<TGroupName>>, product: ProductCommon<TGroupName>) =>
    satisfiesFilter(product, selectedTermsByGroup)
      ? [...agg, product]
      : agg,
  []);

export const ProductsList = <TGroupName extends AllKnownProductTaxonomies>({ allProducts, productTaxonomies }: Props<TGroupName>) => {
  const [selectedTermsByGroup] = useFilterQuery(productTaxonomies);
  const filteredProducts = filterProducts(allProducts, selectedTermsByGroup);

  if (!isFeatureEnabled(Feature.ProductsPage)) {
    return (
      <ProductsPageWrapper>
        <Typography variant="h2">Na stránke stále pracujeme...</Typography>
      </ProductsPageWrapper>
    );
  }

  return (
    <ProductsPageWrapper>
      <Filters<TGroupName> filters={productTaxonomies} />
      {!filteredProducts.length
        ? (<Typography variant="h4">Nenašli sa žiadne produkty vyhovujúce filtrom...</Typography>)
        : (<ProductsGrid products={filteredProducts} />)
      }
    </ProductsPageWrapper>
  );
};

const ProductsPageWrapper: React.FC = ({ children }) => (
  <Section>
    <SectionTitle>Produkty</SectionTitle>
    <Container maxWidth="lg">
      {children as any}
    </Container>
  </Section>
);

type GridProps<TGroupName extends AllKnownProductTaxonomies> = {
  readonly products: ReadonlyArray<ProductCommon<TGroupName>>;
}

export const ProductsGrid = <TGroupName extends AllKnownProductTaxonomies>({ products }: GridProps<TGroupName>) => (
  <Grid
    container
    spacing={4}
    direction="row"
    justify="flex-start"
    alignItems="stretch"
  >
    {products.map(product => (
      <Grid
        key={product.id}
        item
        style={{ display: 'flex' }}
        xl={3}
        lg={3}
        md={4}
        sm={4}
        xs={6}
      >
        <ProductTile product={product} />
      </Grid>
    ))}
  </Grid>
);
