import { Kontent_Taxonomy_System, Kontent_Taxonomy_Term, Maybe } from '../../../graphql-types';
import { AllKnownProductTaxonomies } from './taxonomies';

export type Term = {
  readonly codename: string;
  readonly name: string;
};

export type TaxonomyGroup<TGroupName extends string = string> = {
  readonly groupCodename: TGroupName;
  readonly groupName: string;
  readonly allTerms: ReadonlyArray<Term>;
};

type KontentTaxonomy = {
  terms?: Maybe<Array<Maybe<Pick<Kontent_Taxonomy_Term, 'codename' | 'name'>>>>;
  system: Pick<Kontent_Taxonomy_System, 'codename' | 'name'>;
};

export const mapTaxonomyFromKontent = <TGroup extends AllKnownProductTaxonomies>(
  g: KontentTaxonomy,
): TaxonomyGroup<TGroup> => ({
  groupName: g.system.name,
  groupCodename: g.system.codename as TGroup,
  allTerms: g.terms?.map(t => ({
    name: t?.name ?? '',
    codename: t?.codename ?? '',
  })) ?? [],
});

export const mapAllTaxonomyFromKontent = <TGroup extends AllKnownProductTaxonomies>(
  gs: { nodes: Array<KontentTaxonomy> },
): ReadonlyArray<TaxonomyGroup<TGroup>> =>
  gs.nodes.map(n => mapTaxonomyFromKontent(n));

export const sortTaxonomyFilters = <TGroup extends AllKnownProductTaxonomies>(
  groups: ReadonlyArray<TaxonomyGroup<TGroup>>,
  groupsOrder: TGroup[],
): ReadonlyArray<TaxonomyGroup<TGroup>> =>
  groupsOrder
  .map(codename => groups.find(g => g.groupCodename === codename))
  .filter(g => !!g) as ReadonlyArray<TaxonomyGroup<TGroup>>;
