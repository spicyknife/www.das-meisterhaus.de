import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-referenzen',
  templateUrl: './referenzen.component.html',
  styleUrls: ['./referenzen.component.scss']
})
export class ReferenzenComponent implements OnInit {
  @Input() filter: string = "";
  constructor() {}

  // ********** SLIDER ********** //
  // ITEM-1
  slide1ImageSrc = '../../assets/img/slider/referenzen.jpg';
  slide1Headline = 'Überzeugen Sie sich selbst';
  slide1Subline = 'Referenzhäuser zufriedener Bauherren';
  slide1Url = '/referenzen';

  // ********** SUB-NAVIGATION ********** //
  // ITEM-1
  subNavItem1Headline = 'Bauen Sie meisterhaft';
  subNavItem1Subline = 'Ihr Traum vom eigenen Haus wird Wirklichkeit';
  subNavItem1Url = '/bauen';
  subNavItem1Size = 'col-8';
  subNavItem1Id = 'bauen';
  // ITEM-2
  subNavItem2Headline = 'Das ist das Meisterhaus';
  subNavItem2Subline = '';
  subNavItem2Url = '/unternehmen';
  subNavItem2Size = 'col-4';
  subNavItem2Id = 'unternehmen';

  ngOnInit() {}
  onActiveFilter(filter: string) {
    this.filter = filter;
  }
}
