import { Router } from '@angular/router';
import { emptySub } from './../../clever.shared';
import { Component, OnInit } from '@angular/core';
import { CleverBauen } from '../../../../shared/interfaces';

@Component({
  selector: 'app-attika',
  templateUrl: './attika.component.html',
  styleUrls: ['./attika.component.scss']
})
export class AttikaComponent implements OnInit {
  attika: CleverBauen = emptySub;

  constructor(private router: Router) {}

  ngOnInit() {
    this.attika.ahDachform = 'attikadach';
  }

  submit() {
    localStorage.setItem('clever', JSON.stringify(this.attika)),
      this.router.navigate(['/kontakt']);
  }

  kellerOutput(value: string) {
    this.attika.ahKeller = value;
  }
  erdgeschossOutput(value: string) {
    this.attika.erdgeschoss = value;
  }
  dachgeschossOutput(value: string) {
    this.attika.dachgeschoss = value;
  }
}
