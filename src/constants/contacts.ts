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
