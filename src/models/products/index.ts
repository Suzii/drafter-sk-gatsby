import { TaxonomyElementFieldsFragment } from '../../../graphql-types';
import { Maybe, Uuid } from '../../@types/global';
import { FluidImg, KontentRte } from '../_common';
import { Term } from '../taxonomies/_common';
import { AllKnownProductTaxonomies } from '../taxonomies/taxonomies';

export type ProductProperty<TGroupName extends AllKnownProductTaxonomies> = {
  readonly groupName: string;
  readonly groupCodename: TGroupName;
  readonly term: Maybe<Term>;
};

export type ProductProperties<TGroupName extends AllKnownProductTaxonomies> = {
  readonly [P in TGroupName]: ProductProperty<TGroupName>;
};

export type ProductCommon<TGroupName extends AllKnownProductTaxonomies> = {
  readonly id: Maybe<Uuid>;
  readonly name: Maybe<string>;
  readonly url: string;
  readonly description: KontentRte;
  readonly img: FluidImg;
  readonly properties: ProductProperties<TGroupName>
};

export const mapTaxonomyElement = <TGroupName extends AllKnownProductTaxonomies>(e: Maybe<TaxonomyElementFieldsFragment>): ProductProperty<TGroupName> => ({
  groupCodename: e?.taxonomy_group as unknown as TGroupName,
  groupName: e?.name ?? '',
  term: e?.value?.[0],
});
