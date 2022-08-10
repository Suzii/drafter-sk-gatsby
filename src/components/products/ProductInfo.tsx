import React from 'react';
import { ProductProperties, ProductProperty } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';

export type ProductInfoProps<TGroupName extends AllKnownProductTaxonomies> = {
  readonly properties: ProductProperties<TGroupName>;
};

export const ProductInfo = <TGroupName extends AllKnownProductTaxonomies>({ properties }: ProductInfoProps<TGroupName>) => (
  <div className="flex flex-col space-y-xs">
    {Object.values<ProductProperty<TGroupName>>(properties).map(p => (
      <div key={p.groupCodename} className="flex flex-wrap w-full">
        <div className="font-bold">{p.groupName}:</div>
        <div className="ml-xs mr-auto">{p.terms.map(t => t.name).join(', ') || '-'}</div>
      </div>
    ))}
  </div>
);


export type ProductPackagingProps = {
  readonly piecesInPackage: number;
  readonly weight: string;
};

export const ProductPackaging = ({ piecesInPackage, weight }: ProductPackagingProps) =>
  piecesInPackage || weight
    ? (
      <div className="flex flex-col space-y-xs">
        <div className="flex flex-wrap w-full">
          <div className="font-bold">Počet kusov v balení:</div>
          <div className="ml-xs mr-auto">{piecesInPackage || '-'}</div>
        </div>

        <div className="flex flex-wrap w-full">
          <div className="font-bold">Hmotnosť 1 ks:</div>
          <div className="ml-xs mr-auto">{weight || '-'}</div>
        </div>
      </div>
    )
    : null;
