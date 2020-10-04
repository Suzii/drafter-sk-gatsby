import { Feature, isFeatureEnabled } from '../utils/featureToggles';

export const WHO_WE_ARE_FRAGMENT = 'kto-sme';
export const PARTNERS_FRAGMENT = 'partneri';
export const CONTACT_FRAGMENT = 'kontakt';

export const HOME_URL = '/';
export const WHO_WE_ARE_URL = `/#${WHO_WE_ARE_FRAGMENT}`;
export const PARTNERS_URL = `/#${PARTNERS_FRAGMENT}`;
export const CONTACT_URL = `/#${CONTACT_FRAGMENT}`;
export const PRODUCTS_URL = '/produkty';

export const MAMAS_PDF_LINK = 'https://assets-us-01.kc-usercontent.com/f408ff21-bb77-0017-334f-f1ea95739f2a/7bdfc31c-1927-4b88-87c6-61959b6ce3fa/mamas.pdf';

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
