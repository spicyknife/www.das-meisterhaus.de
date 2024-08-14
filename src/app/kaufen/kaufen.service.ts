import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class KaufenService {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  formular = this.formBuilder.group({
    bauvorhaben : [null],
  })


  get bauvorhabenGewaehlt () {
    return !!this.formular.get('bauvorhaben')?.value;
  }

  waehleBauvorhaben (bauvorhaben: string) {
    this.formular.patchValue({bauvorhaben : bauvorhaben})
    this.router.navigate(['kontakt']);
  }

  setzeZurueck() {
    this.formular.patchValue({bauvorhaben : null})
  }

}
