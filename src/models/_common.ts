import {
  Kontent_Item_Asset_Element,
  Kontent_Item_Rich_Text_Element_Value, Kontent_Item_Taxonomy_Element, Kontent_Item_Taxonomy_Element_Value,
  KontentAssetFluid,
} from '../../graphql-types';
import { Maybe } from '../@types/global';

export type KontentRte = Maybe<Pick<Kontent_Item_Rich_Text_Element_Value, 'value'>>;

export type FluidImg = Maybe<(
  Pick<Kontent_Item_Asset_Element, 'description'>
  & { fluid?: Maybe<Pick<KontentAssetFluid, 'aspectRatio' | 'base64' | 'sizes' | 'src' | 'srcSet'>> }
  )>;

export type TaxonomyElement = Maybe<(
  Pick<Kontent_Item_Taxonomy_Element_Value, 'name' | 'taxonomy_group'>
  & { value?: Maybe<Array<Maybe<Pick<Kontent_Item_Taxonomy_Element, 'name' | 'codename'>>>> }
  )>;
