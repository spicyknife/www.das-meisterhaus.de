import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class KonfiguratorService {

  formular = this.formBuilder.group({ bauweise:[], aktionshaus:[], dachform:[], dachfarbe:[], fensterfarbe:[], kamin:[], ausstattung:[] })

  constructor( private formBuilder: FormBuilder) {}

  aktuellerStep : number = 1;

  get stepVorwaertsMoeglich() {
    if (this.aktuellerStep === 1){
      return !! this.formular.get('bauweise')?.value;
    }
    if (this.aktuellerStep === 2){
      return !! this.formular.get('aktionshaus')?.value;
    }
    if (this.aktuellerStep === 3){
      return !! this.formular.get('dachform')?.value;
    }
    if (this.aktuellerStep === 4){
      return !! this.formular.get('dachfarbe')?.value;
    }
    if (this.aktuellerStep === 5){
      return !! this.formular.get('fensterfarbe')?.value;
    }
    if (this.aktuellerStep === 6){
      return !! this.formular.get('kamin')?.value;
    }
    if (this.aktuellerStep === 7){
      return !! this.formular.get('ausstattung')?.value;
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

export enum Bauweise {
  massiv = 'massiv',
  holz = 'holz'
};

export enum Aktionshaus {
  aktionshaus112 = 'aktionshaus112',
  aktionshaus113 = 'aktionshaus113',
  aktionshaus114 = 'aktionshaus114'
};

export enum Dachform {
  satteldach = 'satteldach',
  erker = 'erker',
  vollgeschoss = 'vollgeschoss'
};

export enum Dachfarbe {
  schwarz = 'schwarz',
  rot = 'rot'
};

export enum Fensterfarbe {
  weiss = 'weiss',
  schwarz = 'schwarz'
};

export enum Kamin {
  nein='nein',
  ja = 'ja'
};

export enum Ausstattung {
  kellergeschoss = 'kellergeschoss',
  vinylboden = 'vinylboden',
  lueftungsanlageZentral = 'lueftungsanlage-zentral',
  lueftungsanlageDezentral = 'lueftungsanlage-dezentral',
  elektrischeRolladen = 'elektrische-rolladen',
  malerArbeitenInnen = 'maler-arbeiten-innen'
}
