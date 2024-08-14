import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KontaktService } from './kontakt.service';
import { ContactForm } from '../shared/interfaces';
import { Bauweise, KonfiguratorService } from '../bauen/konfigurator/konfigurator.service';
import { KaufenService } from '../kaufen/kaufen.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  show = false;

  constructor(fb: FormBuilder, private kontaktService: KontaktService, public konfiguratorService:KonfiguratorService, public kaufenService: KaufenService,) {
    this.form = fb.group({
      // Base Data
      anrede: [''],
      nachname: ['', [Validators.required]],
      vorname: ['', [Validators.required]],
      strasse: [''],
      plz: [''],
      ort: [''],
      email: ['', [Validators.required]],
      telefon: ['', [Validators.required]],

      // Kaufen
      kaufen : kaufenService.formular,

      // Konfigurator
      konfigurator: konfiguratorService.formular,

      // Individuell Bauen
      individuellerBau: [false],
      bauweise: [''],
      bauform: [''],
      groesse: [''],
      keller: [''],
      dachform: [''],
      // Optional Data
      bauplatz: [''],
      bauplatzWo: [''],
      einzugstermin: [''],
      message: [''],
      // Honepots
      repeatMail: [''],
      name: [''],
      surname: [''],
    });
  }

  ngOnInit() {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      const clever = localStorage.getItem('clever');
      if (clever) {
        this.form.patchValue(JSON.parse(clever));
      }
      const individuell = localStorage.getItem('individuell');
      if (individuell) {
        this.form.patchValue(JSON.parse(individuell));
      }
      localStorage.clear();
    });
  }
  // TOAST
  submit(value: any) {
    if (this.form.valid) {
      this.show = true;
      this.kontaktService.sendMail(value).subscribe((result) => {
        // this.show = true;
      });
    }
  }
  close() {
    this.show = false;
  }
}
