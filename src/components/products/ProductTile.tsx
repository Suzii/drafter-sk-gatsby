import { ImageElement } from '@kentico/gatsby-kontent-components';
import { Link } from 'gatsby';
import React from 'react';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
import { ProductCommon } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';

type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly product: ProductCommon<TGroupName>;
};

export const ProductTile = <TGroupName extends AllKnownProductTaxonomies>({ product }: Props<TGroupName>) => (
  <div className="flex flex-col bg-white relative shadow-sm hover:shadow-lg transition duration-500">
    <Link to={product.url}>
      <ImageElement
        className=""
        image={product.img ?? {} as any}
        alt={product.img?.description ?? product.name ?? 'Obrázok produktu'}
      />
    </Link>
    <div className="py-sm px-sm bg-white">
      <Link to={product.url}>
        <div {...getKontentAttrs(product.id, 'name')} className="text-secondary text-left font-semibold text-md hover:text-secondary-dark hover:cursor-pointer">
          {product.name}
        </div>
      </Link>
    </div>
  </div>
);
