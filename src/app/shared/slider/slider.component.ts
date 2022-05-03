import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  // ********** SLIDER ********** //
  // ITEM-1
  @Input() slide1ImageSrc: string  = "";
  @Input() slide1Headline: string  = "";
  @Input() slide1Subline: string  = "";
  @Input() slide1Url: string  = "";

  // ITEM-2
  @Input() slide2ImageSrc: string  = "";
  @Input() slide2Headline: string  = "";
  @Input() slide2Subline: string  = "";
  @Input() slide2Url: string  = "";

  // ITEM-3
  @Input() slide3ImageSrc: string  = "";
  @Input() slide3Headline: string  = "";
  @Input() slide3Subline: string  = "";
  @Input() slide3Url: string  = "";

  // ITEM-4
  @Input() slide4ImageSrc: string  = "";
  @Input() slide4Headline: string  = "";
  @Input() slide4Subline: string  = "";
  @Input() slide4Url: string  = "";

  // ITEM-5
  @Input() slide5ImageSrc: string  = "";
  @Input() slide5Headline: string  = "";
  @Input() slide5Subline: string  = "";
  @Input() slide5Url: string  = "";

  constructor() {}

  ngOnInit() {}
}
