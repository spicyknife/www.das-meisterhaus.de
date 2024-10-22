import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  // ********** SLIDER ********** //
  // ITEM-1
  slide1ImageSrc = '../../assets/img/slider/bauen.jpg';
  slide1Headline = 'Bauen';
  slide1Subline = '';
  slide1Url = '/bauen';
  // ITEM-2
  slide2ImageSrc = '../../assets/img/slider/individuell-bauen.jpg';
  slide2Headline = 'Individuell bauen';
  slide2Subline = '';
  slide2Url = '/individuell-bauen';
  // ITEM-3
  slide3ImageSrc = '../../assets/img/slider/clever-bauen.jpg';
  slide3Headline = 'Konfigurator';
  slide3Subline = '';
  slide3Url = '/starte-konfigurator';

  // ********** SUB-NAVIGATION ********** //
  // ITEM-1
  subNavItem1Headline = 'Bauen';
  subNavItem1Subline = '';
  subNavItem1Url = '/bauen';
  subNavItem1Size = 'col-6';
  subNavItem1Id = 'individuell-bauen';
  // ITEM-2
  subNavItem2Headline = 'Konfigurator';
  subNavItem2Subline = '';
  subNavItem2Url = '/starte-konfigurator';
  subNavItem2Size = 'col-6';
  subNavItem2Id = 'clever-bauen';
  // ITEM-3
  subNavItem3Headline = 'Referenzen';
  subNavItem3Subline = '';
  subNavItem3Url = '/referenzen';
  subNavItem3Size = 'col-3';
  subNavItem3Id = 'referenzen';
  // ITEM-4
  subNavItem4Headline = 'Kaufen';
  subNavItem4Subline = '';
  subNavItem4Url = '/kaufen';
  subNavItem4Size = 'col-3';
  subNavItem4Id = 'bauen';
  // ITEM-5
  subNavItem5Headline = 'Über uns';
  subNavItem5Subline = '';
  subNavItem5Url = '/ueber-uns';
  subNavItem5Size = 'col-3';
  subNavItem5Id = 'unternehmen';

  ngOnInit() {}
}
