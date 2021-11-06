import { ImageItem } from '@kentico/gatsby-kontent-components/dist/image-element';
import { Kontent_Item_Rich_Text_Element_Value } from '../../graphql-types';
import { Maybe } from '../@types/global';

export type KontentRte = Maybe<Pick<Kontent_Item_Rich_Text_Element_Value, 'value'>>;

export type KontentImage = ImageItem;
