export const isActive = (url: string) => isActiveNormalized(stripSlashes(url));

const isActiveNormalized = (url: string) => {
  if (typeof window === 'undefined') {
    return false;
  }
  else  {
    return url.startsWith('#')
      ? url === stripSlashes(window.location.hash)
      : url === stripSlashes(window.location.pathname);
  }
}


export const stripSlashes = (urlFragment: string) =>
  urlFragment
    .replace(/^\/+/, '')
    .replace(/\/+$/, '');
