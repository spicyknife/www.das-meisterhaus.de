import { Router } from '@angular/router';
import { emptySub } from './../../clever.shared';
import { Component, OnInit } from '@angular/core';
import { CleverBauen } from '../../../../shared/interfaces';
@Component({
  selector: 'app-pultdach-versetzt',
  templateUrl: './pultdach-versetzt.component.html',
  styleUrls: ['./pultdach-versetzt.component.scss']
})
export class PultdachVersetztComponent implements OnInit {
  pultdachversetzt: CleverBauen = emptySub;

  constructor(private router: Router) {}

  ngOnInit() {
    this.pultdachversetzt.ahDachform = 'pultdach_versetzt';
  }

  submit() {
    localStorage.setItem('clever', JSON.stringify(this.pultdachversetzt)),
      this.router.navigate(['/kontakt']);
  }

  kellerOutput(value: string) {
    this.pultdachversetzt.ahKeller = value;
  }
  erdgeschossOutput(value: string) {
    this.pultdachversetzt.erdgeschoss = value;
  }
  dachgeschossOutput(value: string) {
    this.pultdachversetzt.dachgeschoss = value;
  }
}
