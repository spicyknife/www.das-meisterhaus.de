import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clever',
  templateUrl: './clever.component.html',
  styleUrls: ['./clever.component.scss']
})
export class CleverComponent implements OnInit {
  filter: string = "";
  constructor() {}

  // ********** SLIDER ********** //
  slide1ImageSrc = '../../assets/img/slider/clever-bauen.jpg';
  slide1Headline = 'Clever bauen';
  slide1Subline = 'Mit unseren Aktionshäusern einfach & günstig bauen';
  slide1Url = '/clever-bauen';

  ngOnInit() {}
  onActiveFilter(filter: string) {
    this.filter = filter;
  }
}
