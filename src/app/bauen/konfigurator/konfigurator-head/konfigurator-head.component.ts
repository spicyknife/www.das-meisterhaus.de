import { Component, OnInit } from '@angular/core';
import { KonfiguratorService } from '../konfigurator.service';

@Component({
  selector: 'app-konfigurator-head',
  templateUrl: './konfigurator-head.component.html',
  styleUrls: ['./konfigurator-head.component.scss',
  './../konfigurator.component.scss'
  ]
})
export class KonfiguratorHeadComponent implements OnInit {

  constructor( public konfiguratorService : KonfiguratorService) { }

  ngOnInit(): void {
  }

}
