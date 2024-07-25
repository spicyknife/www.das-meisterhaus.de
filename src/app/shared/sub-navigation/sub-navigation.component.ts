import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.scss']
})
export class SubNavigationComponent implements OnInit {
  // ********** SUB-NAVIGATION ********** //
  // ITEM-1
  @Input() subNavItem1Headline: string  = "";
  @Input() subNavItem1Subline: string  = "";
  @Input() subNavItem1Url: string  = "";
  @Input() subNavItem1Size: string  = "";
  @Input() subNavItem1Id: string  = "";

  // ITEM-2
  @Input() subNavItem2Headline: string  = "";
  @Input() subNavItem2Subline: string  = "";
  @Input() subNavItem2Url: string  = "";
  @Input() subNavItem2Size: string  = "";
  @Input() subNavItem2Id: string  = "";

  // ITEM-3
  @Input() subNavItem3Headline: string  = "";
  @Input() subNavItem3Subline: string  = "";
  @Input() subNavItem3Url: string  = "";
  @Input() subNavItem3Size: string  = "";
  @Input() subNavItem3Id: string  = "";

  // ITEM-4
  @Input() subNavItem4Headline: string  = "";
  @Input() subNavItem4Subline: string  = "";
  @Input() subNavItem4Url: string  = "";
  @Input() subNavItem4Size: string  = "";
  @Input() subNavItem4Id: string  = "";

  // ITEM-5
  @Input() subNavItem5Headline: string  = "";
  @Input() subNavItem5Subline: string  = "";
  @Input() subNavItem5Url: string  = "";
  @Input() subNavItem5Size: string  = "";
  @Input() subNavItem5Id: string  = "";

  constructor() {}

  ngOnInit() {}
}
