import { Feature, isFeatureEnabled } from '../utils/featureToggles';

export const HOME_URL = '/';
export const WHO_WE_ARE_URL = '/#kto-sme';
export const PARTNERS_URL = '/#partneri';
export const CONTACT_URL = '/#kontakt';
export const PRODUCTS_URL = '/products';

export const PRODUCT_URL = (productSlug: string | null | undefined) =>
  `${PRODUCTS_URL}/${productSlug ?? ''}`;

export type Sitemap = readonly {
  readonly title: string;
  readonly url: string;
  readonly isVisible?: boolean;
  readonly isIndex?: boolean;
}[];

export const sitemap: Sitemap = [
  { title: 'Domov', url: HOME_URL, isVisible: true, isIndex: true },
  { title: 'Kto sme', url: WHO_WE_ARE_URL, isVisible: true },
  { title: 'Produkty', url: PRODUCTS_URL, isVisible: isFeatureEnabled(Feature.ProductsPage) },
  { title: 'Partneri', url: PARTNERS_URL, isVisible: true },
  { title: 'Kontakt', url: CONTACT_URL, isVisible: true },
];
