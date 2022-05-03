import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-referenz-slider',
  templateUrl: './referenz-slider.component.html',
  styleUrls: ['./referenz-slider.component.scss']
})
export class ReferenzSliderComponent implements OnInit {
  // ********** REFERENCE-SLIDER ********** //
  // REFERENCE-SLIDE 1
  @Input() slides: string[] = [];

  constructor() {}

  ngOnInit() {}
}
