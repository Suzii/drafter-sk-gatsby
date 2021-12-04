import React from 'react';
import { Maybe } from '../../@types/global';
import { SectionSubtitle } from '../../_ui-components/Container';
import { Filters, SelectedTermsByGroup, useFilterQuery } from '../../_ui-components/filter/Filters';
import { ProductCommon } from '../../models/products';
import { TaxonomyGroup } from '../../models/taxonomies/_common';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';
import { arrayIntersect } from '../../utils/collectionsUtils';
import { Feature, isFeatureEnabled } from '../../utils/featureToggles';
import { ProductTypeLinks } from './disambiguation/ProductTypeLinks';
// import { ProductTypeLinks } from './disambiguation/ProductTypeLinks';
import { ProductsPageWrapper } from './ProductsPageWrapper';
import { ProductTile } from './ProductTile';

type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly allProducts: ReadonlyArray<ProductCommon<TGroupName>>;
  readonly productTaxonomies: ReadonlyArray<TaxonomyGroup<TGroupName>>;
}

const satisfiesGroupFilter = <TGroupName extends AllKnownProductTaxonomies>(
  product: ProductCommon<TGroupName>,
  groupCodename: TGroupName,
  selectedTerms: Maybe<ReadonlyArray<string>>,
): boolean =>
  !selectedTerms ||
  !selectedTerms.length ||
  !!arrayIntersect(
    selectedTerms,
    product.properties[groupCodename]?.terms.map(t => t.codename) ?? [],
  ).length;

const satisfiesFilter = <TGroupName extends AllKnownProductTaxonomies>(
  product: ProductCommon<TGroupName>,
  selectedTermsByGroup: SelectedTermsByGroup<TGroupName>,
): boolean =>
  Object.keys(selectedTermsByGroup).every(groupCodename =>
    satisfiesGroupFilter(product, groupCodename as TGroupName, selectedTermsByGroup[groupCodename as TGroupName]));


const filterProducts = <TGroupName extends AllKnownProductTaxonomies>(
  allProducts: ReadonlyArray<ProductCommon<TGroupName>>,
  selectedTermsByGroup: SelectedTermsByGroup<TGroupName>,
): ReadonlyArray<ProductCommon<TGroupName>> => allProducts.reduce(
  (agg: ReadonlyArray<ProductCommon<TGroupName>>, product: ProductCommon<TGroupName>) =>
    satisfiesFilter(product, selectedTermsByGroup)
      ? [...agg, product]
      : agg,
  []);

export const ProductsList = <TGroupName extends AllKnownProductTaxonomies>({
  allProducts,
  productTaxonomies,
}: Props<TGroupName>) => {
  const [selectedTermsByGroup] = useFilterQuery(productTaxonomies);
  const filteredProducts = filterProducts(allProducts, selectedTermsByGroup);

  if (!isFeatureEnabled(Feature.ProductsPage)) {
    return (
      <ProductsPageWrapper>
        <SectionSubtitle>
          Na stránke stále pracujeme...
        </SectionSubtitle>
      </ProductsPageWrapper>
    );
  }

  return (
    <ProductsPageWrapper>
      <ProductTypeLinks />
      <div className="container">
      <div className="grid grid-cols-12 gap-sm">
        <div className="col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-2">
          <Filters<TGroupName> filters={productTaxonomies} />
        </div>
        <div className="col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-10">
          {!filteredProducts.length
            ? (<SectionSubtitle>Nenašli sa žiadne produkty vyhovujúce filtrom.</SectionSubtitle>)
            : (<ProductsGrid products={filteredProducts} />)
          }
        </div>
      </div>
      </div>
    </ProductsPageWrapper>
  );
};

type GridProps<TGroupName extends AllKnownProductTaxonomies> = {
  readonly products: ReadonlyArray<ProductCommon<TGroupName>>;
}

export const ProductsGrid = <TGroupName extends AllKnownProductTaxonomies>({ products }: GridProps<TGroupName>) => (
  <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-sm">
    {products.map(product => (
      <div
        className="flex"
        key={product.id}
      >
        <ProductTile product={product} />
      </div>
    ))}
  </div>
);
