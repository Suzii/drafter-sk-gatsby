import { ProductsDisambiguationQuery } from '../../../graphql-types';
import { Maybe, Uuid } from '../../@types/global';
import { FluidImg } from '../_common';

export type ProductType = 'diary' | 'meat' | 'other';

export type ProductTypeModel = {
  readonly id: Maybe<Uuid>,
  readonly title: Maybe<string>,
  readonly type: Maybe<ProductType>,
  readonly img: FluidImg;
};

export const mapProductTypesFromKontent = ({ kontentItemProductsDisambiguation }: ProductsDisambiguationQuery): ReadonlyArray<ProductTypeModel> =>
  kontentItemProductsDisambiguation?.elements?.product_types?.value?.map(type => ({
    id: kontentItemProductsDisambiguation?.system?.id,
    type: type?.elements?.type?.value?.[0]?.codename as Maybe<ProductType>,
    title: type?.elements?.type?.value?.[0]?.name,
    img: type?.elements?.image?.value?.[0],
  }))
  ?? [];
