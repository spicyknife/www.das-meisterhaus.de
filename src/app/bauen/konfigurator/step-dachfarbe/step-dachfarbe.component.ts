import { Component, OnInit } from '@angular/core';
import { Dachfarbe, KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'step-dachfarbe',
  templateUrl: './step-dachfarbe.component.html',
  styleUrls: ['./step-dachfarbe.component.scss',
  './../konfigurator.component.scss'
  ]
})
export class StepDachfarbe implements OnInit {

  dachfarbe = Dachfarbe;

  constructor(public konfiguratorService : KonfiguratorService) { }

  ngOnInit(): void {
  }

}
