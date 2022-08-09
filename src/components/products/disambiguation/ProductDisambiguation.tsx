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
  <Link
    className="flex-1 flex flex-col bg-white relative shadow-sm hover:shadow-lg transition duration-500"
    to={getUrlByProductType(type.type)}
    {...getKontentAttrs(type.id, 'image')}
  >
    {/*<ImageElement*/}
    {/*  className=""*/}
    {/*  image={type.img ?? {} as any}*/}
    {/*  alt={type.img?.description ?? 'Typ produktu'}*/}
    {/*/>*/}
    <div className="mt-auto py-sm px-sm bg-white" {...getKontentAttrs(type.id, 'title')}>
      <div className="text-secondary text-center font-semibold text-xl hover:text-secondary-dark hover:cursor-pointer">
        {type?.title}
      </div>
    </div>
  </Link>
);
