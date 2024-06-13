import { Component, OnInit } from '@angular/core';
import { Aktionshaus, KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'step-aktionshaus',
  templateUrl: './step-aktionshaus.component.html',
  styleUrls: ['./step-aktionshaus.component.scss',
  './../konfigurator.component.scss'
  ]
})
export class StepAktionshaus implements OnInit {

  aktionshaus = Aktionshaus;

  constructor(public konfiguratorService : KonfiguratorService) { }

  ngOnInit(): void {
  }

}
