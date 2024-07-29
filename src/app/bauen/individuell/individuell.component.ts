import { Component, OnInit } from '@angular/core';
import { IndividuellBauen } from '../../shared/interfaces';
import { emptyIB } from './individuell.shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrls: ['./individuell.component.scss']
})
export class IndividuellComponent implements OnInit {
  individuellBauen: IndividuellBauen = emptyIB;

  constructor(private router: Router) {}

  // ********** SLIDER ********** //
  slide1ImageSrc = '../../assets/img/slider/individuell-bauen.jpg';
  slide1Headline = 'Individuell bauen';
  slide1Subline = 'Beim individuellen Meisterhaus ist alles möglich';
  slide1Url = '/individuell-bauen';

  ngOnInit() {}

  submit() {
    localStorage.setItem('individuell', JSON.stringify(this.individuellBauen)),
      this.router.navigate(['/kontakt']);
  }

  kellerOutput(value: string) {
    this.individuellBauen.keller = value;
  }
  groesseOutput(value: string) {
    this.individuellBauen.groesse = value;
  }
  dachformOutput(value: string) {
    this.individuellBauen.dachform = value;
  }
  bauformOutput(value: string) {
    this.individuellBauen.bauform = value;
  }
  bauweiseOutput(value: string) {
    this.individuellBauen.bauweise = value;
  }
}
