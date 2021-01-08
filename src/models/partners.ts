import { HomeQuery } from '../../graphql-types';
import { Maybe, Uuid } from '../@types/global';

export type PartnerType = {
  readonly id: Maybe<Uuid>,
  readonly title: {
    readonly value: string;
  };
  readonly logo: {
    readonly imgSrc: string;
  };
  readonly link: {
    readonly isExternal?: boolean;
    readonly url: string;
  };
};

export const mapFromKontent = (homeQuery: HomeQuery): PartnerType[] =>
  homeQuery.allKontentItemHomepage.nodes?.[0]?.elements?.partners?.value
    ?.map(p => ({
      id: p?.system.id,
      title: {
        value: p?.elements?.title?.value ?? '',
      },
      logo: {
        imgSrc: p?.elements?.logo?.value?.[0]?.url ?? '',
      },
      link: {
        url: p?.elements?.link?.value || '', isExternal: true,
      },
    }))
  ?? [];
