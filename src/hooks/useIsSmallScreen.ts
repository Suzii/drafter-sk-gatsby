import { Theme, useMediaQuery } from '@material-ui/core';

export const useIsSmallScreen = (): boolean =>
  useMediaQuery<Theme>(t => t.breakpoints.down('sm'), { noSsr: true });
