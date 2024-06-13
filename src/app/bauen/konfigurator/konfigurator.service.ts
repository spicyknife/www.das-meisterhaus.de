import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class KonfiguratorService {

  formular = this.formBuilder.group({ bauweise:[] })

  constructor( private formBuilder: FormBuilder) {}

  aktuellerStep : number = 1;

  get stepVorwaertsMoeglich() {
    if (this.aktuellerStep === 1){
      return !! this.formular.get('bauweise')?.value;
    }
    return false;
  }

  get stepRueckwaertsMoeglich() {
    return this.aktuellerStep > 1;
  }

  get stepName() {
    switch (this.aktuellerStep){
      case 1: return 'Schritt 1: Bauweise';
      case 2: return 'Schritt 2: Aktionshaus';
      case 3: return 'Schritt 3: Dachform';
      case 4: return 'Schritt 4: Dachfarbe';
      case 5: return 'Schritt 5: Fensterfarbe';
      case 6: return 'Schritt 6: Kamin';
      case 7: return 'Schritt 7: Optionale Ausstattung';
    }
    return '';
  }

  get naechsterStepName() {
    if (this.aktuellerStep < 7){
      return ` Schritt ${this.aktuellerStep+1} `
    }
    return 'Fertigstellen'
  }

  geheZumNaechstenSchritt() {
    if (this.stepVorwaertsMoeglich){
      this.aktuellerStep++;
    }
  }

  geheZumVorherigenSchritt() {
    if (this.aktuellerStep > 1){
      this.aktuellerStep--;
    }
  }

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
