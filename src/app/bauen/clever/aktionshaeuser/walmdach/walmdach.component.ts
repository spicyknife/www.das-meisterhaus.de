import { Router } from '@angular/router';
import { emptySub } from './../../clever.shared';
import { Component, OnInit } from '@angular/core';
import { CleverBauen } from '../../../../shared/interfaces';

@Component({
  selector: 'app-walmdach',
  templateUrl: './walmdach.component.html',
  styleUrls: ['./walmdach.component.scss']
})
export class WalmdachComponent implements OnInit {
  walmdach: CleverBauen = emptySub;

  constructor(private router: Router) {}

  ngOnInit() {
    this.walmdach.ahDachform = 'walmdach';
  }

  submit() {
    localStorage.setItem('clever', JSON.stringify(this.walmdach)),
      this.router.navigate(['/kontakt']);
  }

  kellerOutput(value: string) {
    this.walmdach.ahKeller = value;
  }
  erdgeschossOutput(value: string) {
    this.walmdach.erdgeschoss = value;
  }
  dachgeschossOutput(value: string) {
    this.walmdach.dachgeschoss = value;
  }
}
