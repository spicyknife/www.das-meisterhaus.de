import { Component, OnInit } from '@angular/core';
import { Kamin, KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'step-schornstein',
  templateUrl: './step-schornstein.component.html',
  styleUrls: ['./step-schornstein.component.scss',
  './../konfigurator.component.scss'
  ]
})
export class StepSchornstein implements OnInit {

  kamin = Kamin;

  constructor(public konfiguratorService : KonfiguratorService) { }

  ngOnInit(): void {
  }

}
