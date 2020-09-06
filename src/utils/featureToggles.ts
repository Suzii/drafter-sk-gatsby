export enum Feature {
  ProductsPage = 'products-page',
}

const enabledFeatures = process.env.GATSBY_ENABLED_FEATURES || '';

export const isFeatureEnabled = (feature: Feature): boolean =>
  enabledFeatures.indexOf(feature) > -1;
