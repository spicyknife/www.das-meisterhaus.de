import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aktionshaus-filter',
  templateUrl: './aktionshaus-filter.component.html',
  styleUrls: ['./aktionshaus-filter.component.scss']
})
export class AktionshausFilterComponent implements OnInit {
  @Output() activeFilter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  filter(filter: string) {
    this.activeFilter.emit(filter);
  }
}
