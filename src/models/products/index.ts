import { TaxonomyElementFieldsFragment } from '../../../graphql-types';
import { Maybe, Uuid } from '../../@types/global';
import { KontentImage, KontentRte } from '../_common';
import { Term } from '../taxonomies/_common';
import { AllKnownProductTaxonomies } from '../taxonomies/taxonomies';

export type ProductProperty<TGroupName extends AllKnownProductTaxonomies> = {
  readonly groupName: string;
  readonly groupCodename: TGroupName;
  readonly terms: ReadonlyArray<Term>;
};

export type ProductProperties<TGroupName extends AllKnownProductTaxonomies> = {
  readonly [P in TGroupName]: ProductProperty<TGroupName>;
};

export type ProductCommon<TGroupName extends AllKnownProductTaxonomies> = {
  readonly id: Maybe<Uuid>;
  readonly name: Maybe<string>;
  readonly url: string;
  readonly description: KontentRte;
  readonly img: Maybe<KontentImage>;
  readonly weight: Maybe<string>;
  readonly piecesInPackage: Maybe<number>;
  readonly properties: ProductProperties<TGroupName>
};

export const mapTaxonomyElement = <TGroupName extends AllKnownProductTaxonomies>(e: Maybe<TaxonomyElementFieldsFragment>): ProductProperty<TGroupName> => ({
  groupCodename: e?.taxonomy_group as unknown as TGroupName,
  groupName: e?.name ?? '',
  terms: e?.value
    ?.filter(t => !!t)
    .map(t => ({
      name: t!.name,
      codename: t!.codename
    }))
    ?? [],
});
