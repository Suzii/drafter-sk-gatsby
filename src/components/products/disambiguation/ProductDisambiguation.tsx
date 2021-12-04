import { ImageElement } from '@kentico/gatsby-kontent-components';
import { Link } from 'gatsby';
import React from 'react';
import { getKontentAttrs } from '../../../_ui-components/kontentSmartlink/KontentSmartlink';
import { getUrlByProductType } from '../../../constants/urls';
import { ProductTypeModel } from '../../../models/products/productTypes';
import { ProductsPageWrapper } from '../ProductsPageWrapper';

type Props = {
  readonly productTypes: ReadonlyArray<ProductTypeModel>;
};

export const ProductsDisambiguation: React.FC<Props> = ({ productTypes }) => (
  <ProductsPageWrapper>
    <div className="container">
      <div className="flex flex-row flex-wrap items-stretch justify-center space-x-sm">
        {productTypes.map(t => (
          <Tile type={t} key={t.id} />
        ))}
      </div>
    </div>
  </ProductsPageWrapper>
);

type TileProps = {
  readonly type: ProductTypeModel;
};

export const Tile: React.FC<TileProps> = ({ type }) => (
  <div className="flex-1 flex flex-col bg-white relative shadow-sm hover:shadow-lg transition duration-500">
    <Link to={getUrlByProductType(type.type)} {...getKontentAttrs(type.id, 'image')}>
      <ImageElement
        className=""
        image={type.img ?? {} as any}
        alt={type.img?.description ?? 'Typ produktu'}
      />
    </Link>
    <div className="py-sm px-sm bg-white" {...getKontentAttrs(type.id, 'title')}>
      <Link to={getUrlByProductType(type.type)}>
        <div className="text-secondary text-center font-semibold text-md hover:text-secondary-dark hover:cursor-pointer">
          {type?.title}
        </div>
      </Link>
    </div>
  </div>
);
