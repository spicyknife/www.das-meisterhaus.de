import { Component, OnInit } from '@angular/core';
import { KonfiguratorService } from './konfigurator.service';


@Component({
  selector: 'app-konfigurator',
  templateUrl: './konfigurator.component.html',
  styleUrls: ['./konfigurator.component.scss']
})
export class KonfiguratorComponent implements OnInit {

  constructor(public konfiguratorService : KonfiguratorService) {}

  ngOnInit(): void {
  }

}
