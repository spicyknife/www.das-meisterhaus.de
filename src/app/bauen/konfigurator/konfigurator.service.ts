import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class KonfiguratorService {

  formular = this.formBuilder.group({
    bauweise:[null],
    aktionshaus:[null],
    dachform:[null],
    dachfarbe:[null],
    fensterfarbe:[null],
    kamin:[null],
    ausstattung: this.formBuilder.group({
      kellergeschoss: [false],
      vinylboden: [false],
      lueftungsanlageZentral: [false],
      lueftungsanlageDezentral: [false],
      elektrischeRolladen: [false],
      malerarbeitenInnen: [false],
    }) })

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

  get bauweise() {
    return this.formular.get('bauweise')!.value as Bauweise;
  }
  get aktionshaus() {
    return this.formular.get('aktionshaus')!.value as Aktionshaus;
  }
  get dachform() {
    return this.formular.get('dachform')!.value as Dachform;
  }
  get dachfarbe() {
    return this.formular.get('dachfarbe')!.value as Dachfarbe;
  }
  get fensterfarbe() {
    return this.formular.get('fensterfarbe')!.value as Fensterfarbe;
  }
  get kamin() {
    return this.formular.get('kamin')!.value as Kamin;
  }
  get ausstattung() {
    return this.formular.get('ausstattung')!.value;
  }

  get urlZumBild() {
    let bild: string = "img.1";
    if (this.aktionshaus === Aktionshaus.aktionshaus113) {
      bild = "img.2";
    }
    if (this.aktionshaus === Aktionshaus.aktionshaus114) {
      bild = "img.3";
    }
    if (this.dachform === Dachform.erker) {
        bild +='.Erker';
    }
    if (this.dachform === Dachform.vollgeschoss) {
        bild += '.VG';
    }
    if (this.dachfarbe === Dachfarbe.rot) {
      bild +='.DR';
    }
    if (this.fensterfarbe === Fensterfarbe.schwarz) {
      bild +='.AF';
    }
    if (this.kamin === Kamin.ja) {
      bild +='.Kamin';
    }
    bild += '.jpg'
    return bild;
  }

  step2UrlTeil(aktionshaus: Aktionshaus) {
    switch (aktionshaus) {
      case Aktionshaus.aktionshaus113:
        return ".2";
      case Aktionshaus.aktionshaus114:
        return ".3";
      default:
        return ".1";
    }
  }

  step3UrlTeil(dachform: Dachform) {
    switch (dachform) {
      case Dachform.erker:
        return ".Erker";
      case Dachform.vollgeschoss:
        return ".VG";
      default:
        return "";
    }
  }

  step4UrlTeil(dachfarbe: Dachfarbe) {
    switch (dachfarbe) {
      case Dachfarbe.rot:
        return '.DR';
      default:
        return '';
    }
  }

  step5UrlTeil(fensterfarbe: Fensterfarbe) {
    switch (fensterfarbe) {
      case Fensterfarbe.schwarz:
        return '.AF';
      default:
        return '';
    }
  }

  step6UrlTeil(kamin: Kamin) {
    switch(kamin) {
      case Kamin.ja:
        return '.Kamin';
      default:
        return '';
    }
  }

  stepUrl(
    step: number,
    ersatzwert: Aktionshaus | Dachform | Dachfarbe | Fensterfarbe | Kamin | null
  ) {
    const formulardaten = {...this.formular.value};
    switch (step) {
      case 2:
        formulardaten.aktionshaus = ersatzwert;
        break;
      case 3:
        formulardaten.dachform = ersatzwert;
        break;
      case 4:
        formulardaten.dachfarbe = ersatzwert;
        break;
      case 5:
        formulardaten.fensterfarbe = ersatzwert;
        break;
      case 6:
        formulardaten.kamin = ersatzwert;
        break;
    }
    return `img${this.step2UrlTeil(
      formulardaten.aktionshaus
    )}${this.step3UrlTeil(formulardaten.dachform)}${this.step4UrlTeil(
      formulardaten.dachfarbe
    )}${this.step5UrlTeil(formulardaten.fensterfarbe)}${this.step6UrlTeil(
      formulardaten.kamin
    )}`;
  }

  get aktuellerPreis() {
    let preis : number | null = null;
    const formulardaten = this.formular.value;

    console.debug(formulardaten);

    if (formulardaten.bauweise) {
      preis = Preise.bauweise[formulardaten.bauweise as Bauweise];
      if (formulardaten.dachform) {
        preis = Preise.dachform[formulardaten.dachform as Dachform][formulardaten.bauweise as Bauweise];
      }
    }
    if (preis && formulardaten.fensterfarbe) {
      preis += Preise.fensterfarbe[formulardaten.fensterfarbe as Fensterfarbe];
    }
    if (preis && formulardaten.kamin) {
      preis += Preise.kamin[formulardaten.kamin as Kamin];
    }
    if (preis && formulardaten.ausstattung.kellergeschoss) {
      preis += Preise.ausstattung.kellergeschoss;
    }
    if (preis && formulardaten.ausstattung.vinylboden) {
      preis += Preise.ausstattung.vinylboden;
    }
    if (preis && formulardaten.ausstattung.lueftungsanlageZentral) {
      preis += Preise.ausstattung.lueftungsanlageZentral;
    }
    if (preis && formulardaten.ausstattung.lueftungsanlageDezentral) {
      preis += Preise.ausstattung.lueftungsanlageDezentral;
    }
    if (preis && formulardaten.ausstattung.elektrischeRolladen) {
      preis += Preise.ausstattung.elektrischeRolladen;
    }
    if (preis && formulardaten.ausstattung.malerarbeitenInnen) {
      preis += Preise.ausstattung.malerarbeitenInnen;
    }

    return preis;
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
  kaminEinzuegig = 'kamin-einzuegig',
  elektrischeRolladen = 'elektrische-rolladen',
  malerarbeitenInnen = 'maler-arbeiten-innen'
}

export const Preise = {
  bauweise: {
    [Bauweise.holz]: 343900,
    [Bauweise.massiv]: 319900
  },
  dachform: {
    [Dachform.satteldach]: {
      [Bauweise.holz]: 343900,
      [Bauweise.massiv]: 319900
    },
    [Dachform.erker]: {
      [Bauweise.holz]: 355690,
      [Bauweise.massiv]: 328690
    },
    [Dachform.vollgeschoss]: {
      [Bauweise.holz]: 359740,
      [Bauweise.massiv]: 330890,
    }
  },
  fensterfarbe: {
    [Fensterfarbe.weiss]: 0,
    [Fensterfarbe.schwarz]: 1390,
  },
  kamin: {
    [Kamin.nein]: 0,
    [Kamin.ja]: 6990,
  },
  ausstattung: {
    kellergeschoss: 59900,
    vinylboden: 8390,
    lueftungsanlageZentral: 12890,
    lueftungsanlageDezentral: 9890,
    elektrischeRolladen: 4560,
    malerarbeitenInnen: 7990,
  },
}
