import { RichTextElement } from '@kentico/gatsby-kontent-components';
import React, { FC } from 'react';
import { ProductDescriptionRte } from '../../models/product';

type Props = {
  readonly rte: ProductDescriptionRte;
};

export const ProductDescription: FC<Props> = ({ rte }) => {
  if (!rte) {
    return null;
  }

  return (
    <RichTextElement value={rte.value} />
  );
}
