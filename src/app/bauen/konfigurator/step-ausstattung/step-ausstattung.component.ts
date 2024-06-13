import { Component, OnInit } from '@angular/core';
import { Ausstattung, KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'step-ausstattung',
  templateUrl: './step-ausstattung.component.html',
  styleUrls: ['./step-ausstattung.component.scss',
  './../konfigurator.component.scss'
  ]
})
export class StepAusstattung implements OnInit {

  ausstattung = Ausstattung;

  constructor(public konfiguratorService : KonfiguratorService) { }

  ngOnInit(): void {
  }

}
