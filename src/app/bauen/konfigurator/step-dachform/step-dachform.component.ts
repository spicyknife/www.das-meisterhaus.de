import { Component, OnInit } from '@angular/core';
import { Dachform, KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'step-dachform',
  templateUrl: './step-dachform.component.html',
  styleUrls: ['./step-dachform.component.scss',
  './../konfigurator.component.scss'
  ]
})
export class StepDachform implements OnInit {

  dachform = Dachform;

  constructor(public konfiguratorService : KonfiguratorService) { }

  ngOnInit(): void {
  }

}
