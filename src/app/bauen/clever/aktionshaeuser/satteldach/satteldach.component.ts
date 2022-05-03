import { Router } from '@angular/router';
import { emptySub } from './../../clever.shared';
import { Component, OnInit } from '@angular/core';
import { CleverBauen } from '../../../../shared/interfaces';

@Component({
  selector: 'app-satteldach',
  templateUrl: './satteldach.component.html',
  styleUrls: ['./satteldach.component.scss']
})
export class SatteldachComponent implements OnInit {
  satteldach: CleverBauen = emptySub;

  constructor(private router: Router) {}

  ngOnInit() {
    this.satteldach.ahDachform = 'satteldach';
  }

  submit() {
    localStorage.setItem('clever', JSON.stringify(this.satteldach)),
      this.router.navigate(['/kontakt']);
  }

  kellerOutput(value: string) {
    this.satteldach.ahKeller = value;
  }
  erdgeschossOutput(value: string) {
    this.satteldach.erdgeschoss = value;
  }
  dachgeschossOutput(value: string) {
    this.satteldach.dachgeschoss = value;
  }
}
