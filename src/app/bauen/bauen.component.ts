import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bauen',
  templateUrl: './bauen.component.html',
  styleUrls: ['./bauen.component.scss']
})
export class BauenComponent implements OnInit {
  constructor() {}

  // ********** SLIDER ********** //
  // ITEM-1
  slide1ImageSrc = '../../assets/img/slider/bauen.jpg';
  slide1Headline = 'Bauen Sie meisterhaft';
  slide1Subline = 'Ihr Traum vom eigenen Haus wird Wirklichkeit!';
  slide1Url = '/bauen';

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
