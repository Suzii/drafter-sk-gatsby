export const PRODUCTS_URL = '/products';

export const PRODUCT_URL = (productSlug: string | null | undefined) =>
  `${PRODUCTS_URL}/${productSlug ?? ''}`;
