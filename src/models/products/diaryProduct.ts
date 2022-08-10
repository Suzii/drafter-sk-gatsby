import { DiaryProductFallbackQuery, DiaryProductQuery, DiaryProductsQuery } from '../../../graphql-types';
import { PRODUCT_URL } from '../../constants/urls';
import { DiaryProductTaxonomy } from '../taxonomies/taxonomies';
import { mapTaxonomyElement, ProductCommon } from './index';

export type DiaryProduct = ProductCommon<DiaryProductTaxonomy>;

export const mapDiaryProductsFromKontent = (query: DiaryProductsQuery): DiaryProduct[] =>
  query.allKontentItemDiaryProduct.edges
  ?.map(p => ({
    id: p?.node.system.id,
    name: p?.node.elements?.produkt_core__name?.value ?? '',
    description: p?.node.elements?.produkt_core__description,
    img: p?.node.elements?.produkt_core__image?.value?.[0] ?? null,
    url: PRODUCT_URL('diary', p?.node.elements?.url_slug?.value || ''),
    properties: {
      producer: mapTaxonomyElement(p?.node.elements?.produkt_core__producer),
      country: mapTaxonomyElement(p?.node.elements?.produkt_core__country),
      milk_type: mapTaxonomyElement(p?.node.elements?.milk_type),
      diary_type: mapTaxonomyElement(p?.node.elements?.diary_type),
    },
  }))
  ?? [];


export const mapDiaryProductFromKontent = ({ kontentItemDiaryProduct: p }: DiaryProductQuery | DiaryProductFallbackQuery): DiaryProduct => ({
  id: p?.system.id,
  name: p?.elements?.produkt_core__name?.value ?? '',
  description: p?.elements?.produkt_core__description,
  img: p?.elements?.produkt_core__image?.value?.[0] ?? null,
  url: PRODUCT_URL('diary', p?.elements?.url_slug?.value ?? ''),
  weight: p?.elements?.weight_freeform?.value ?? null,
  piecesInPackage: p?.elements?.pieces_in_package?.value ?? null,
  properties: {
    producer: mapTaxonomyElement(p?.elements?.produkt_core__producer),
    country: mapTaxonomyElement(p?.elements?.produkt_core__country),
    milk_type: mapTaxonomyElement(p?.elements?.milk_type),
    diary_type: mapTaxonomyElement(p?.elements?.diary_type),
  },
});
