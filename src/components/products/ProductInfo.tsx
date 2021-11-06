import React from 'react';
import styled from 'styled-components';
import { ProductProperties, ProductProperty } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';

export type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly properties: ProductProperties<TGroupName>;
};

export const ProductInfo = <TGroupName extends AllKnownProductTaxonomies>({ properties }: Props<TGroupName>) => (
  <ProductInfoStyled>
    {Object.values<ProductProperty<TGroupName>>(properties).map(p => (
      <React.Fragment key={p.groupCodename}>
        <div className="label">{p.groupName}</div>
        <div className="value">{p.terms.map(t => t.name).join(', ') || '-'}</div>
      </React.Fragment>
    ))}
  </ProductInfoStyled>
);

const ProductInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0;
  width: 100%;

  .label {
    width: 30%;
    margin-bottom: 10px;
    font-weight: ${p => p.theme.typography.fontWeightBold};
  }

  .value {
    width: 70%;
    margin-bottom: 10px;
  }
`;
