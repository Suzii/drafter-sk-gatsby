import { HomeQuery } from '../../graphql-types';
import { Maybe, Uuid } from '../@types/global';
import { KontentImage } from './_common';

export type IntroType = {
  readonly id: Maybe<Uuid>,
  readonly title: Maybe<string>;
  readonly subtitle: Maybe<string>;
  readonly cta: Maybe<string>;
  readonly image: KontentImage;
};

export const mapIntroFromKontent = (homeQuery: HomeQuery): IntroType => ({
  id: homeQuery?.allKontentItemHomepage?.nodes?.[0]?.elements?.content?.value?.[0]?.system?.id,
  title: homeQuery?.allKontentItemHomepage?.nodes?.[0]?.elements?.content?.value?.[0]?.elements?.title?.value,
  subtitle: homeQuery?.allKontentItemHomepage?.nodes?.[0]?.elements?.content?.value?.[0]?.elements?.subtitle?.value,
  cta: homeQuery?.allKontentItemHomepage?.nodes?.[0]?.elements?.content?.value?.[0]?.elements?.cta?.value,
  image: homeQuery?.allKontentItemHomepage?.nodes?.[0]?.elements?.content?.value?.[0]?.elements?.image?.value?.[0],
});
