import { ImageElement } from '@kentico/gatsby-kontent-components';
import { Link } from 'gatsby';
import React from 'react';
import { Icon } from '../../_ui-components/Icon';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
import { ProductCommon } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';

type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly product: ProductCommon<TGroupName>;
};

export const ProductTile = <TGroupName extends AllKnownProductTaxonomies>({ product }: Props<TGroupName>) => (
  <Link
    className="flex flex-col w-full h-full bg-white relative shadow-sm hover:shadow-lg transition duration-500"
    to={product.url}
    {...getKontentAttrs(product.id, 'name')}
  >
    {product.img
      ? <ImageElement
        className=""
        image={product.img ?? {} as any}
        alt={product.img?.description ?? product.name ?? 'Obrázok produktu'}
      />
      : <Icon type="no-image" className="text-6xl m-auto" />
    }
    <div className="mt-auto py-sm px-sm bg-white">
      <div className="text-secondary text-left font-semibold text-md hover:text-secondary-dark hover:cursor-pointer">
        {product.name}
      </div>
    </div>
  </Link>
);
