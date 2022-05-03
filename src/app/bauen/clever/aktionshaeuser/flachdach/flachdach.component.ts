import { Router } from '@angular/router';
import { emptySub } from './../../clever.shared';
import { Component, OnInit } from '@angular/core';
import { CleverBauen } from '../../../../shared/interfaces';

@Component({
  selector: 'app-flachdach',
  templateUrl: './flachdach.component.html',
  styleUrls: ['./flachdach.component.scss']
})
export class FlachdachComponent implements OnInit {
  flachdach: CleverBauen = emptySub;

  constructor(private router: Router) {}

  ngOnInit() {
    this.flachdach.ahDachform = 'flachdach';
  }

  submit() {
    localStorage.setItem('clever', JSON.stringify(this.flachdach)),
      this.router.navigate(['/kontakt']);
  }

  kellerOutput(value: string) {
    this.flachdach.ahKeller = value;
  }
  erdgeschossOutput(value: string) {
    this.flachdach.erdgeschoss = value;
  }
  dachgeschossOutput(value: string) {
    this.flachdach.dachgeschoss = value;
  }
}
