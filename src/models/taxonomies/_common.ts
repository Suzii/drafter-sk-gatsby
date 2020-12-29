import { Kontent_Taxonomy_System, Kontent_Taxonomy_Term, Maybe } from '../../../graphql-types';

export type Term = {
  readonly codename: string;
  readonly name: string;
};

export type TaxonomyGroup = {
  readonly groupName: string;
  readonly groupCodename: string;
  readonly allTerms: ReadonlyArray<Term>;
};

type KontentTaxonomy = {
  terms?: Maybe<Array<Maybe<Pick<Kontent_Taxonomy_Term, 'codename' | 'name'>>>>;
  system: Pick<Kontent_Taxonomy_System, 'codename' | 'name'>;
};

export const mapTaxonomyFromKontent = (g: KontentTaxonomy): TaxonomyGroup => ({
  groupName: g.system.name,
  groupCodename: g.system.codename,
  allTerms: g.terms?.map(t => ({
    name: t?.name ?? '',
    codename: t?.codename ?? '',
  })) ?? [],
});

export const mapAllTaxonomyFromKontent = (gs: { nodes: Array<KontentTaxonomy> }): ReadonlyArray<TaxonomyGroup> =>
  gs.nodes.map(n => mapTaxonomyFromKontent(n));
