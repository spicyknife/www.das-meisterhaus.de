import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unternehmen',
  templateUrl: './unternehmen.component.html',
  styleUrls: ['./unternehmen.component.scss']
})
export class UnternehmenComponent implements OnInit {
  constructor() {}

  // ********** SLIDER ********** //
  // ITEM-1
  slide1ImageSrc = '../../assets/img/slider/unternehmen.jpg';
  slide1Headline = 'Das ist das Meisterhaus';
  slide1Subline = 'Details & Wissenswertes zum Unternehmen';
  slide1Url = '/unternehmen';

  // ********** SUB-NAVIGATION ********** //
  // ITEM-1
  subNavItem1Headline = 'Individuell bauen';
  subNavItem1Subline = 'Beim individuellen Meisterhaus ist alles möglich';
  subNavItem1Url = 'individuell-bauen';
  subNavItem1Size = 'col-6';
  subNavItem1Id = 'individuell-bauen';
  // ITEM-2
  subNavItem2Headline = 'Unser Konfigurator';
  subNavItem2Subline = 'Schritt für Schritt zum Ihrem Meisterhaus';
  subNavItem2Url = 'starte-konfigurator';
  subNavItem2Size = 'col-6';
  subNavItem2Id = 'clever-bauen';

  ngOnInit() {}
}
