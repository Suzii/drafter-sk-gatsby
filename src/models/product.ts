import {
  DiaryProductQuery,
  DiaryProductsQuery,
} from '../../graphql-types';
import { Maybe, Uuid } from '../@types/global';
import { AllKnownProductTaxonomies, DiaryProductTaxonomy, ProductCommonTaxonomy } from './taxonomies/taxonomies';
import { PRODUCT_URL } from '../constants/urls';
import { FluidImg, KontentRte, TaxonomyElement } from './_common';
import { Term } from './taxonomies/_common';

export type ProductProperty<TGroupName extends AllKnownProductTaxonomies> = {
  readonly groupName: string;
  readonly groupCodename: TGroupName;
  readonly term: Maybe<Term>;
};

export type ProductProperties<TGroupName extends AllKnownProductTaxonomies> = {
  readonly [P in TGroupName]: ProductProperty<TGroupName>;
};

export type ProductCommon = {
  readonly id: Maybe<Uuid>;
  readonly name: Maybe<string>;
  readonly url: string;
  readonly description: KontentRte;
  readonly img: FluidImg;
  readonly properties: ProductProperties<DiaryProductTaxonomy>
};

export type ProductDetail = ProductCommon;

export type ProductListing = ProductCommon;

const mapTaxonomyElement = <TGroupName extends AllKnownProductTaxonomies>(e: TaxonomyElement): ProductProperty<TGroupName> => ({
  groupCodename: e?.taxonomy_group as unknown as TGroupName,
  groupName: e?.name ?? '',
  term: e?.value?.[0],

});

export const mapProductsFromKontent = <TGroupName extends AllKnownProductTaxonomies>(query: DiaryProductsQuery): ProductListing[] =>
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


export const mapProductFromKontent = ({ kontentItemDiaryProduct: p }: DiaryProductQuery): ProductDetail => ({
  id: p?.system.id,
  name: p?.elements?.produkt_core__name?.value ?? '',
  description: p?.elements?.produkt_core__description,
  img: p?.elements?.produkt_core__image?.value?.[0] ?? null,
  url: PRODUCT_URL('diary',p?.elements?.url_slug?.value ?? ''),
  properties: {
    producer: mapTaxonomyElement(p?.elements?.produkt_core__producer),
    country: mapTaxonomyElement(p?.elements?.produkt_core__country),
    milk_type: mapTaxonomyElement(p?.elements?.milk_type),
    diary_type: mapTaxonomyElement(p?.elements?.diary_type),
  },
});
