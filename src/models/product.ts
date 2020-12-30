import {
  DiaryProductQuery,
  DiaryProductsQuery,
} from '../../graphql-types';
import { Maybe, Uuid } from '../@types/global';
import { ProductCommonTaxonomy } from './taxonomies/taxonomies';
import { PRODUCT_URL } from '../constants/urls';
import { FluidImg, KontentRte } from './_common';
import { Term } from './taxonomies/_common';

type ProductTaxonomies = {
  readonly [P in ProductCommonTaxonomy]: Maybe<Term>;
};

export type ProductCommon = ProductTaxonomies & {
  readonly id: Maybe<Uuid>;
  readonly name: Maybe<string>;
  readonly url: string;
  readonly description: KontentRte;
  readonly img: FluidImg;
};

export type ProductDetail = ProductCommon;

export type ProductListing = ProductCommon;

export const mapProductsFromKontent = (query: DiaryProductsQuery): ProductListing[] =>
  query.allKontentItemDiaryProduct.edges
  ?.map(p => ({
    id: p?.node.system.id,
    name: p?.node.elements?.produkt_core__name?.value ?? '',
    description: p?.node.elements?.produkt_core__description,
    img: p?.node.elements?.produkt_core__image?.value?.[0] ?? null,
    url: PRODUCT_URL('diary', p?.node.elements?.url_slug?.value || ''),
    producer: p?.node.elements?.produkt_core__producer?.value?.[0],
    country: p?.node.elements?.produkt_core__country?.value?.[0],
  }))
  ?? [];


export const mapProductFromKontent = ({ kontentItemDiaryProduct: p }: DiaryProductQuery): ProductDetail => ({
  id: p?.system.id,
  name: p?.elements?.produkt_core__name?.value ?? '',
  description: p?.elements?.produkt_core__description,
  img: p?.elements?.produkt_core__image?.value?.[0] ?? null,
  url: PRODUCT_URL('diary',p?.elements?.url_slug?.value ?? ''),
  producer: p?.elements?.produkt_core__producer?.value?.[0],
  country: p?.elements?.produkt_core__country?.value?.[0],
});
