import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss']
})
export class TestimonialSliderComponent implements OnInit {
  // ********** TESTIMONIALS ********** //
  // ITEM-1
  @Input() testimonial1Text: string = "";
  @Input() testimonial1Author: string = "";

  // ITEM-2
  @Input() testimonial2Text: string = "";
  @Input() testimonial2Author: string = "";

  // ITEM-3
  @Input() testimonial3Text: string = "";
  @Input() testimonial3Author: string = "";

  // ITEM-4
  @Input() testimonial4Text: string = "";
  @Input() testimonial4Author: string = "";

  // ITEM-5
  @Input() testimonial5Text: string = "";
  @Input() testimonial5Author: string = "";

  constructor() {}

  ngOnInit() {}
}
