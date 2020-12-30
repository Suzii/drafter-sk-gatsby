import { Kontent_Taxonomy_System, Kontent_Taxonomy_Term, Maybe } from '../../../graphql-types';
import { ProductCommonTaxonomy } from './taxonomies';

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

export const mapTaxonomyFromKontent = (g: KontentTaxonomy): TaxonomyGroup<ProductCommonTaxonomy> => ({
  groupName: g.system.name,
  groupCodename: g.system.codename as ProductCommonTaxonomy,
  allTerms: g.terms?.map(t => ({
    name: t?.name ?? '',
    codename: t?.codename ?? '',
  })) ?? [],
});

export const mapAllTaxonomyFromKontent = (gs: { nodes: Array<KontentTaxonomy> }): ReadonlyArray<TaxonomyGroup<ProductCommonTaxonomy>> =>
  gs.nodes.map(n => mapTaxonomyFromKontent(n));
