import { Component, OnInit } from '@angular/core';
import { Fensterfarbe, KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'step-fensterfarbe',
  templateUrl: './step-fensterfarbe.component.html',
  styleUrls: ['./step-fensterfarbe.component.scss',
  './../konfigurator.component.scss'
  ]
})
export class StepFensterfarbe implements OnInit {

  fensterfarbe = Fensterfarbe;

  constructor(public konfiguratorService : KonfiguratorService) { }

  ngOnInit(): void {
  }

}
