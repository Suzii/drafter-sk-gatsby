export type Contact = {
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
};

const DEVELOPER_EMAIL = 'z.dankovcikova@gmail.com';
export const developerContact: Contact = {
  name: 'Suzii',
  email: DEVELOPER_EMAIL,
};

export const primaryContact: Contact = {
  name: 'Ing. Juraj Dankovčík',
  email: 'dankovcik@drafter.sk',
  phone: '+421 907 122 336',
};

export const secondaryContact: Contact = {
  name: 'Juraj Záhora',
  email: 'zahora@drafter.sk',
  phone: '+421 905 795 641',
};

const COMPANY_EMAIL = 'drafter.sro@gmail.com';
export const companyInfo = {
  address: {
    line1: `DRAFTER, s.r.o.`,
    line2: `Príles 604/40`,
    line3: `Trenčianska Teplá, 91401`,
  },
  email: COMPANY_EMAIL,
  ico: `36694215`,
  dic: `2022265784`,
  icDph: `SK2022265784`,
};

export type CompanyInfo = typeof companyInfo;
export type Address = typeof companyInfo.address;
