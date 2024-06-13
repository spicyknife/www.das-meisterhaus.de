import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KonfiguratorService {

  constructor() {}

  aktuellerStep : number = 1;

  bauweise? : Bauweise;
  aktionshaus? : Aktionshaus;
  dachform? : Dachform;
  dachfarbe? : Dachfarbe;
  fensterfarbe? : Fensterfarbe;
  kamin? : Kamin;
  ausstattung? : Ausstattung;

  get urlZumBild() {
    let bild: string = "img.1";
    if (this.aktionshaus === Aktionshaus.aktionshaus113) {
      bild = "img.2";
    }
    if (this.aktionshaus === Aktionshaus.aktionshaus114) {
      bild = "img.3";
    }

    if (this.dachform === Dachform.erker) {
        bild +='Erker';
    }
    if (this.dachform === Dachform.vollgeschoss) {
        bild += 'VG';
    }

    bild += '.jpg'

    return bild;

  }

}

export const enum Bauweise {
  massiv = 'massiv',
  holz = 'holz'
};

export const enum Aktionshaus {
  aktionshaus112 = 'aktionshaus112',
  aktionshaus113 = 'aktionshaus113',
  aktionshaus114 = 'aktionshaus114'
};

export const enum Dachform {
  satteldach = 'satteldach',
  erker = 'erker',
  vollgeschoss = 'vollgeschoss'
};

export const enum Dachfarbe {
  schwarz = 'schwarz',
  rot = 'rot'
};

export const enum Fensterfarbe {
  weiß = 'weiß',
  schwarz = 'schwarz'
};

export const enum Kamin {
  nein='nein',
  ja = 'ja'
};

export const enum Ausstattung {
  kellergeschoss = 'kellergeschoss',
  vinylboden = 'vinylboden',
  lueftungsanlageZentral = 'lueftungsanlage-zentral',
  lueftungsanlageDezentral = 'lueftungsanlage-dezentral',
  elektrischeRolladen = 'elektrische-rolladen',
  malerArbeitenInnen = 'maler-arbeiten-innen'
}
