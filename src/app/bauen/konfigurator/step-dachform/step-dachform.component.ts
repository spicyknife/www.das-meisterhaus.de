import { Component, OnInit } from '@angular/core';
import { Bauweise, Dachform, KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'step-dachform',
  templateUrl: './step-dachform.component.html',
  styleUrls: ['./step-dachform.component.scss',
  './../konfigurator.component.scss'
  ]
})
export class StepDachform implements OnInit {

  dachform = Dachform;
  bauweise = Bauweise;

  constructor(public konfiguratorService : KonfiguratorService) { }

  ngOnInit(): void {
  }

}
