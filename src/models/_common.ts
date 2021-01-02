import {
  Kontent_Item_Asset_Element,
  Kontent_Item_Rich_Text_Element_Value, KontentAssetFixed,
  KontentAssetFluid,
} from '../../graphql-types';
import { Maybe } from '../@types/global';

export type KontentRte = Maybe<Pick<Kontent_Item_Rich_Text_Element_Value, 'value'>>;

export type FluidImg = Maybe<(
  Pick<Kontent_Item_Asset_Element, 'description'>
  & { fluid?: Maybe<Pick<KontentAssetFluid, 'aspectRatio' | 'base64' | 'sizes' | 'src' | 'srcSet'>> }
  )>;

export type FixedImg = Maybe<(
  Pick<Kontent_Item_Asset_Element, 'description'>
  & { fixed?: Maybe<Pick<KontentAssetFixed, 'aspectRatio' | 'base64' | 'src' | 'srcSet'>> }
  )>;
