import { MAMAS_PDF_LINK } from './urls';

export type PartnerType = {
  readonly name: string;
  readonly logo: {
    readonly imgSrc: string;
  };
  readonly link: {
    readonly isExternal?: boolean;
    readonly url: string;
  };
};

export const partners: readonly PartnerType[] = [
  {
    name: 'Milkefekt',
    logo: { imgSrc: '/partners/milkefekt.png' },
    link: { url: 'http://www.milkeffekt.cz/', isExternal: true },
  },
  {
    name: 'Kluknavská mliekareň odd',
    logo: { imgSrc: '/partners/kluknava.png' },
    link: { url: 'http://www.kluknavskamliekaren.sk/', isExternal: true },
  },
  {
    name: 'Hôrka mäsovýroba',
    logo: { imgSrc: '/partners/horka.png' },
    link: { url: 'http://www.horka.sk/', isExternal: true },
  },
  {
    name: 'Farma Bardy',
    logo: { imgSrc: '/partners/farma-bardy.png' },
    link: { url: 'http://www.farmabardy.sk/', isExternal: true },
  },
  {
    name: 'Syrové torty - Hričovské podhradie',
    logo: { imgSrc: '/partners/syrove-torty.png' },
    link: { url: 'http://syrove-torty.sk/', isExternal: true },
  },
  {
    name: 'Poľnohospodárske Družstvo Mestečko',
    logo: { imgSrc: '/partners/pd-mestecko.png' },
    link: { url: 'http://pdmestecko.sk/', isExternal: true },
  },
  {
    name: `MAMA's`,
    logo: { imgSrc: '/partners/mamas.png' },
    link: { url: MAMAS_PDF_LINK, isExternal: true },
  },
];
