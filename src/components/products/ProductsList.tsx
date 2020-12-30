import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Maybe } from '../../@types/global';
import { Section, SectionTitle } from '../../_ui-components/Container';
import { Filters, SelectedTermsByGroup, useFilterQuery } from '../../_ui-components/filter/Filters';
import { ProductListing } from '../../models/product';
import { TaxonomyGroup } from '../../models/taxonomies/_common';
import { T_COUNTRY, T_PRODUCER, ProductCommonTaxonomy } from '../../models/taxonomies/taxonomies';
import { Feature, isFeatureEnabled } from '../../utils/featureToggles';
import { ProductTile } from './ProductTile';

type Props = {
  readonly allProducts: ReadonlyArray<ProductListing>;
  readonly productTaxonomies: ReadonlyArray<TaxonomyGroup<ProductCommonTaxonomy>>;
}

const satisfiesGroupFilter = (product: ProductListing, groupCodename: ProductCommonTaxonomy, selectedTerms: Maybe<ReadonlyArray<string>>): boolean =>
  !selectedTerms ||
  !selectedTerms.length ||
  selectedTerms.includes(product[groupCodename]?.codename ?? '');

const satisfiesFilter = (product: ProductListing, selectedTermsByGroup: SelectedTermsByGroup<ProductCommonTaxonomy>): boolean =>
  satisfiesGroupFilter(product, T_PRODUCER, selectedTermsByGroup[T_PRODUCER]) &&
  satisfiesGroupFilter(product, T_COUNTRY, selectedTermsByGroup[T_COUNTRY]);

const filterProducts = (allProducts: ReadonlyArray<ProductListing>, selectedTermsByGroup: SelectedTermsByGroup<ProductCommonTaxonomy>): ReadonlyArray<ProductListing> => allProducts.reduce(
  (agg: ReadonlyArray<ProductListing>, product: ProductListing) =>
    satisfiesFilter(product, selectedTermsByGroup)
      ? [...agg, product]
      : agg,
  []);

export const ProductsList: React.FC<Props> = ({ allProducts, productTaxonomies }) => {
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
      <Filters<ProductCommonTaxonomy> filters={productTaxonomies} />
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

export const ProductsGrid: React.FC<{ readonly products: ReadonlyArray<ProductListing> }> = ({ products }) => (
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
