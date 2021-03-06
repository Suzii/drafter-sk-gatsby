import { MeatProductQuery, MeatProductsQuery, MeatProductFallbackQuery } from '../../../graphql-types';
import { PRODUCT_URL } from '../../constants/urls';
import { MeatProductTaxonomy } from '../taxonomies/taxonomies';
import { mapTaxonomyElement, ProductCommon } from './index';

export type MeatProduct = ProductCommon<MeatProductTaxonomy>;

export const mapMeatProductsFromKontent = (query: MeatProductsQuery): MeatProduct[] =>
  query.allKontentItemMeatProduct.edges
  ?.map(p => ({
    id: p?.node.system.id,
    name: p?.node.elements?.produkt_core__name?.value ?? '',
    description: p?.node.elements?.produkt_core__description,
    img: p?.node.elements?.produkt_core__image?.value?.[0] ?? null,
    url: PRODUCT_URL('meat', p?.node.elements?.url_slug?.value || ''),
    properties: {
      producer: mapTaxonomyElement(p?.node.elements?.produkt_core__producer),
      country: mapTaxonomyElement(p?.node.elements?.produkt_core__country),
    },
  }))
  ?? [];


export const mapMeatProductFromKontent = ({ kontentItemMeatProduct: p }: MeatProductQuery | MeatProductFallbackQuery): MeatProduct => ({
  id: p?.system.id,
  name: p?.elements?.produkt_core__name?.value ?? '',
  description: p?.elements?.produkt_core__description,
  img: p?.elements?.produkt_core__image?.value?.[0] ?? null,
  url: PRODUCT_URL('meat', p?.elements?.url_slug?.value ?? ''),
  properties: {
    producer: mapTaxonomyElement(p?.elements?.produkt_core__producer),
    country: mapTaxonomyElement(p?.elements?.produkt_core__country),
  },
});
