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

  constructor() {}

  ngOnInit() {}
}
