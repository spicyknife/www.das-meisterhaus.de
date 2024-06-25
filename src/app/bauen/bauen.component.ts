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
  subNavItem1Headline = 'Individuell bauen';
  subNavItem1Subline = 'Beim individuellen Meisterhaus ist alles möglich';
  subNavItem1Url = '/individuell-bauen';
  subNavItem1Size = 'col-6';
  subNavItem1Id = 'individuell-bauen';
  // ITEM-2
  subNavItem2Headline = 'Unser Konfigurator';
  subNavItem2Subline = 'Schritt für Schritt zum Ihrem Meisterhaus';
  subNavItem2Url = '/starte-konfigurator';
  subNavItem2Size = 'col-6';
  subNavItem2Id = 'clever-bauen';

  ngOnInit() {}
}
