import React from 'react';
import styled from 'styled-components';
import { ProductCommon } from '../../models/product';

export type ProductInfoProps = {
  readonly info: ProductCommon;
};

export const ProductInfo: React.FC<ProductInfoProps> = ({ info }) => (
  <ProductInfoStyled>
    <div className="label">Výrobca</div>
    <div className="value">{info.producer?.name ?? '-'}</div>

    <div className="label">Krajina</div>
    <div className="value">{info.country?.name ?? '-'}</div>
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
