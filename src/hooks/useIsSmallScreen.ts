export const useIsSmallScreen = (): boolean =>
  window.matchMedia("(max-width: 640px)").matches;
