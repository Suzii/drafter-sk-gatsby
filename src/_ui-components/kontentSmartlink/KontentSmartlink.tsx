import React from 'react';
import { Maybe, Uuid } from '../../@types/global';
import { isPreviewEnv } from '../../utils/featureToggles';

type ElementCodenames = 'name' | 'image' | 'logo';

type Props = {
  readonly itemId: Maybe<Uuid>;
  readonly elementCodename: ElementCodenames;
};

export const KontentSmartLink: React.FC<Props> = ({ itemId, elementCodename, children }) => (
  <div {...getKontentAttrs(itemId, elementCodename)}>
    {children}
  </div>
);


export const getKontentAttrs = (
  itemId: Maybe<Uuid>,
  elementCodename: ElementCodenames
) => isPreviewEnv
  ? ({
    'data-kontent-item-id': itemId,
    'data-kontent-element-codename': elementCodename,
  })
  : {};
