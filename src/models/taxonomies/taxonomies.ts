type Producer = 'producer';
type Country = 'country';
type MilkType = 'milk_type';
type DiaryType = 'diary_type';

export type ProductCommonTaxonomy =
  Producer
  | Country;

export type DiaryProductTaxonomy = ProductCommonTaxonomy
  | MilkType
  | DiaryType;

export type MeatProductTaxonomy = ProductCommonTaxonomy;
export type OtherProductTaxonomy = ProductCommonTaxonomy;

export type AllKnownProductTaxonomies =
  Producer |
  Country |
  MilkType |
  DiaryType;
