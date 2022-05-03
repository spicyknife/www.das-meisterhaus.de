import { Router } from '@angular/router';
import { emptySub } from './../../clever.shared';
import { Component, OnInit } from '@angular/core';
import { CleverBauen } from '../../../../shared/interfaces';

@Component({
  selector: 'app-pultdach',
  templateUrl: './pultdach.component.html',
  styleUrls: ['./pultdach.component.scss']
})
export class PultdachComponent implements OnInit {
  pultdach: CleverBauen = emptySub;

  constructor(private router: Router) {}

  ngOnInit() {
    this.pultdach.ahDachform = 'pultdach';
  }

  submit() {
    localStorage.setItem('clever', JSON.stringify(this.pultdach)),
      this.router.navigate(['/kontakt']);
  }

  kellerOutput(value: string) {
    this.pultdach.ahKeller = value;
  }
  erdgeschossOutput(value: string) {
    this.pultdach.erdgeschoss = value;
  }
  dachgeschossOutput(value: string) {
    this.pultdach.dachgeschoss = value;
  }
}
