import { Kontent_Item_Asset_Element, KontentAssetFluid, ProductQuery, ProductsQuery } from '../../graphql-types';
import { Maybe, Uuid } from '../@types/global';
import { Term } from './taxonomies/_common';

export type ProductCommon = {
  readonly id: Maybe<Uuid>;
  readonly name: Maybe<string>;
  readonly urlSlug: Maybe<string>;
  readonly producer: Maybe<Term>;
  readonly country: Maybe<Term>;
};

export type ProductDetail = ProductCommon & {
  readonly description: Maybe<string>;
  readonly img: Maybe<(
    Pick<Kontent_Item_Asset_Element, 'description'>
    & { fluid?: Maybe<Pick<KontentAssetFluid, 'aspectRatio' | 'base64' | 'sizes' | 'src' | 'srcSet'>> }
    )>;
};

export type ProductListing = ProductCommon & {
  readonly img: Maybe<(
    Pick<Kontent_Item_Asset_Element, 'description'>
    & { fluid?: Maybe<Pick<KontentAssetFluid, 'aspectRatio' | 'base64' | 'sizes' | 'src' | 'srcSet'>> }
    )>;
};

export const mapProductsFromKontent = (query: ProductsQuery): ProductListing[] =>
  query.allKontentItemProduct.edges
  ?.map(p => ({
    id: p?.node.system.id,
    name: p?.node.elements?.name?.value ?? '',
    img: p?.node.elements?.image?.value?.[0] ?? null,
    urlSlug: p?.node.elements?.url_slug?.value || '',
    producer: p?.node.elements?.producer?.value?.[0],
    country: p?.node.elements?.country?.value?.[0],
  }))
  ?? [];


export const mapProductFromKontent = ({ kontentItemProduct: p }: ProductQuery): ProductDetail => ({
  id: p?.system.id,
  name: p?.elements?.name?.value ?? '',
  description: p?.elements?.description?.value ?? '',
  img: p?.elements?.image?.value?.[0] ?? null,
  urlSlug: p?.elements?.url_slug?.value ?? '',
  producer: p?.elements?.producer?.value?.[0],
  country: p?.elements?.country?.value?.[0],
});
