import { Component, OnInit } from '@angular/core';
import { KaufenService } from './kaufen.service';

@Component({
  selector: 'app-kaufen',
  templateUrl: './kaufen.component.html',
  styleUrls: ['./kaufen.component.scss']
})
export class KaufenComponent implements OnInit {

  constructor(public kaufenService : KaufenService) {}

  // ********** SUB-NAVIGATION ********** //
  // ITEM-1
  subNavItem1Headline = 'Referenzen';
  subNavItem1Subline = '';
  subNavItem1Url = '/referenzen';
  subNavItem1Size = 'col-6';
  subNavItem1Id = 'referenzen';
  // ITEM-2
  subNavItem2Headline = 'Über uns';
  subNavItem2Subline = '';
  subNavItem2Url = '/ueber-uns';
  subNavItem2Size = 'col-6';
  subNavItem2Id = 'unternehmen';
  // ITEM-3
  subNavItem3Headline = 'Finanzierungsrechner';
  subNavItem3Subline = '';
  subNavItem3Url = '/finanzierungsrechner';
  subNavItem3Size = 'col-12';
  subNavItem3Id = 'finanzierungsrechner';

  ngOnInit() {}
}
