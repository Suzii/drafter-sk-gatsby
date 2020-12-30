type Producer = 'producer';
type Country = 'country';
type MilkType = 'milk_type';
type DiaryType = 'diary_type';

export const T_PRODUCER: Producer = 'producer';
export const T_COUNTRY: Country = 'country';
export const T_MILK_TYPE: MilkType = 'milk_type';
export const T_DIARY_TYPE: DiaryType = 'diary_type';

export type ProductCommonTaxonomy =
  Producer
  | Country;

export type DiaryProductTaxonomy = ProductCommonTaxonomy
  | MilkType
  | DiaryType;

export type AllKnownTaxonomies =
  Producer |
  Country |
  MilkType |
  DiaryType;
