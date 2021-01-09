import { OtherProductFallbackQuery, OtherProductQuery, OtherProductsQuery } from '../../../graphql-types';
import { PRODUCT_URL } from '../../constants/urls';
import { OtherProductTaxonomy } from '../taxonomies/taxonomies';
import { mapTaxonomyElement, ProductCommon } from './index';

export type OtherProduct = ProductCommon<OtherProductTaxonomy>;

export const mapOtherProductsFromKontent = (query: OtherProductsQuery): OtherProduct[] =>
  query.allKontentItemOtherProduct.edges
  ?.map(p => ({
    id: p?.node.system.id,
    name: p?.node.elements?.produkt_core__name?.value ?? '',
    description: p?.node.elements?.produkt_core__description,
    img: p?.node.elements?.produkt_core__image?.value?.[0] ?? null,
    url: PRODUCT_URL('other', p?.node.elements?.url_slug?.value || ''),
    properties: {
      producer: mapTaxonomyElement(p?.node.elements?.produkt_core__producer),
      country: mapTaxonomyElement(p?.node.elements?.produkt_core__country),
    },
  }))
  ?? [];


export const mapOtherProductFromKontent = ({ kontentItemOtherProduct: p }: OtherProductQuery | OtherProductFallbackQuery): OtherProduct => ({
  id: p?.system.id,
  name: p?.elements?.produkt_core__name?.value ?? '',
  description: p?.elements?.produkt_core__description,
  img: p?.elements?.produkt_core__image?.value?.[0] ?? null,
  url: PRODUCT_URL('other', p?.elements?.url_slug?.value ?? ''),
  properties: {
    producer: mapTaxonomyElement(p?.elements?.produkt_core__producer),
    country: mapTaxonomyElement(p?.elements?.produkt_core__country),
  },
});
