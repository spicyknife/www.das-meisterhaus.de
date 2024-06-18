import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-konfigurator',
  templateUrl: './konfigurator.component.html',
  styleUrls: ['./konfigurator.component.scss']
})
export class KonfiguratorComponent implements OnInit {

  constructor() { }
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
  subNavItem2Headline = 'Clever bauen';
  subNavItem2Subline = 'Mit unseren Aktionshäusern einfach & günstig bauen';
  subNavItem2Url = '/clever-bauen';
  subNavItem2Size = 'col-6';
  subNavItem2Id = 'clever-bauen';

  ngOnInit(): void {
  }

}
