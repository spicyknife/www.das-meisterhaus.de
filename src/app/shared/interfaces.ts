export interface BaseData {
  anrede: string;
  nachname: string;
  vorname: string;
  strasse: string;
  plz: number;
  ort: string;
  email: string;
  telefon: number;
}

export interface HoneyPot {
  repeatMail: string;
  surname: string;
  name: string;
}

export interface CleverBauen {
  aktionshaus: string;
  erdgeschoss: string;
  dachgeschoss: string;
  ahKeller: string;
  ahDachform: string;
}

export interface IndividuellBauen {
  individuellerBau: string;
  bauweise: string,
  bauform: string;
  groesse: string;
  keller: string;
  dachform: string;
}

export interface OptionalData {
  bauplatz: boolean;
  bauplatzOrt: string;
  einzugstermin: string;
  nachricht: string;
}

export interface ContactForm {
  honey: HoneyPot;
  base: BaseData;
  clever: CleverBauen;
  individuell: IndividuellBauen;
  optional: OptionalData;
}
