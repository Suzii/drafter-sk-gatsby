import { ImageElement } from '@kentico/gatsby-kontent-components';
import React from 'react';
import { Maybe } from '../../@types/global';
import { Section, SectionTitle } from '../../_ui-components/Container';
import { Icon } from '../../_ui-components/Icon';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
import { ProductCommon } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';
import Layout from '../Layout';
import { ProductDescription } from './ProductDescription';
import { ProductInfo, ProductPackaging } from './ProductInfo';
import { ProductNotFound } from './ProductNotFoud';

type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly product: Maybe<ProductCommon<TGroupName>>;
}

export const ProductDetail = <TGroupName extends AllKnownProductTaxonomies>({ product }: Props<TGroupName>) => {
  if (!product) {
    console.log('Product: no data found');
    return <ProductNotFound />;
  }

  return (
    <Layout>
      <Section id={product.url}>
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-sm">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              {product.img
                ? <ImageElement image={product.img ?? {} as any} className="w-full"/>
                : <Icon type="no-image" className="w-full h-full" />
              }
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-8 space-y-md">
              <SectionTitle {...getKontentAttrs(product.id, 'name')}>
                {product.name}
              </SectionTitle>

              <ProductInfo properties={product.properties} />
              <ProductPackaging piecesInPackage={product.piecesInPackage } weight={product.weight}/>
              <ProductDescription rte={product.description} />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
