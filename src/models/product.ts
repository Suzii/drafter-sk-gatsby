import {
  Kontent_Item_Asset_Element,
  Kontent_Item_Rich_Text_Element_Value,
  KontentAssetFluid,
  DiaryProductQuery,
  DiaryProductsQuery,
} from '../../graphql-types';
import { Maybe, Uuid } from '../@types/global';
import { ProductTaxonomy } from '../constants/taxonomies';
import { FluidImg, KontentRte } from './_common';
import { Term } from './taxonomies/_common';

type ProductTaxonomies = {
  readonly [P in ProductTaxonomy]: Maybe<Term>;
};

export type ProductCommon = ProductTaxonomies & {
  readonly id: Maybe<Uuid>;
  readonly name: Maybe<string>;
  readonly urlSlug: Maybe<string>;
};

export type ProductDetail = ProductCommon & {
  readonly description: KontentRte;
  readonly img: FluidImg;
};

export type ProductListing = ProductCommon & {
  readonly img: FluidImg;
};

export const mapProductsFromKontent = (query: DiaryProductsQuery): ProductListing[] =>
  query.allKontentItemDiaryProduct.edges
  ?.map(p => ({
    id: p?.node.system.id,
    name: p?.node.elements?.produkt_core__name?.value ?? '',
    img: p?.node.elements?.produkt_core__image?.value?.[0] ?? null,
    urlSlug: p?.node.elements?.url_slug?.value || '',
    producer: p?.node.elements?.produkt_core__producer?.value?.[0],
    country: p?.node.elements?.produkt_core__country?.value?.[0],
  }))
  ?? [];


export const mapProductFromKontent = ({ kontentItemDiaryProduct: p }: DiaryProductQuery): ProductDetail => ({
  id: p?.system.id,
  name: p?.elements?.produkt_core__name?.value ?? '',
  description: p?.elements?.produkt_core__description,
  img: p?.elements?.produkt_core__image?.value?.[0] ?? null,
  urlSlug: p?.elements?.url_slug?.value ?? '',
  producer: p?.elements?.produkt_core__producer?.value?.[0],
  country: p?.elements?.produkt_core__country?.value?.[0],
});
