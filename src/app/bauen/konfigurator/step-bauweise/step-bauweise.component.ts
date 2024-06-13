import { Component, OnInit } from '@angular/core';
import { Bauweise, KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'step-bauweise',
  templateUrl: './step-bauweise.component.html',
  styleUrls: ['./step-bauweise.component.scss',
    './../konfigurator.component.scss'
  ]
})
export class StepBauweise implements OnInit {

  bauweise = Bauweise;



  constructor( public konfiguratorService : KonfiguratorService) {

  }

  ngOnInit(): void {
  }

}
