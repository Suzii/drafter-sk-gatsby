export const isActive = (url: string) => isActiveNormalized(stripSlashes(url));

const isActiveNormalized = (url: string) =>
  url.startsWith('#')
    ? url === stripSlashes(window.location.hash)
    : url === stripSlashes(window.location.pathname);

const stripSlashes = (urlFragment: string) =>
  urlFragment
    .replace(/^\/+/, '')
    .replace(/\/+$/, '');
