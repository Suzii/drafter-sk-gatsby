import React from 'react';
import { ProductProperties, ProductProperty } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';

export type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly properties: ProductProperties<TGroupName>;
};

export const ProductInfo = <TGroupName extends AllKnownProductTaxonomies>({ properties }: Props<TGroupName>) => (
  <div className="flex flex-col space-y-xs">
    {Object.values<ProductProperty<TGroupName>>(properties).map(p => (
      <div key={p.groupCodename} className="flex flex-wrap w-full">
        <div className="font-bold">{p.groupName}:</div>
        <div className="ml-xs mr-auto">{p.terms.map(t => t.name).join(', ') || '-'}</div>
      </div>
    ))}
  </div>
);
