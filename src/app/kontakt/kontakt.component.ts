import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KontaktService } from './kontakt.service';
import { ContactForm } from '../shared/interfaces';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  show = false;

  constructor(fb: FormBuilder, private kontaktService: KontaktService) {
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
      // Clever bauen
      aktionshaus: [false],
      ahDachform: [''],
      ahKeller: [''],
      erdgeschoss: [''],
      dachgeschoss: [''],
      // Individuell Bauen
      individuellerBau: [false],
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
