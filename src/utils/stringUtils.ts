import { Maybe } from '../@types/global';

export const nbsp = (s: Maybe<string>): Maybe<string> =>
  s?.replace(/ /g, '\u00a0');
