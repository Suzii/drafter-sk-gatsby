import { RichTextElement } from '@kentico/gatsby-kontent-components';
import React, { FC } from 'react';
import { KontentRte } from '../../models/_common';

type Props = {
  readonly rte: KontentRte;
};

export const ProductDescription: FC<Props> = ({ rte }) => {
  if (!rte) {
    return null;
  }

  return (
    <RichTextElement value={rte.value} />
  );
}
