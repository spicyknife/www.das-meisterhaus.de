import { Router } from '@angular/router';
import { emptySub } from './../../clever.shared';
import { Component, OnInit } from '@angular/core';
import { CleverBauen } from '../../../../shared/interfaces';

@Component({
  selector: 'app-krueppelwalmdach',
  templateUrl: './krueppelwalmdach.component.html',
  styleUrls: ['./krueppelwalmdach.component.scss']
})
export class KrueppelwalmdachComponent implements OnInit {
  krueppelwalmdach: CleverBauen = emptySub;

  constructor(private router: Router) {}

  ngOnInit() {
    this.krueppelwalmdach.ahDachform = 'krueppelwalmdach';
  }

  submit() {
    localStorage.setItem('clever', JSON.stringify(this.krueppelwalmdach)),
      this.router.navigate(['/kontakt']);
  }

  kellerOutput(value: string) {
    this.krueppelwalmdach.ahKeller = value;
  }
  erdgeschossOutput(value: string) {
    this.krueppelwalmdach.erdgeschoss = value;
  }
  dachgeschossOutput(value: string) {
    this.krueppelwalmdach.dachgeschoss = value;
  }
}
