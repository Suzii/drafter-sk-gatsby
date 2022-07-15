const isBrowser = () => typeof window !== "undefined"

export const useIsSmallScreen = (): boolean =>
  isBrowser() && window.matchMedia("(max-width: 640px)").matches;
