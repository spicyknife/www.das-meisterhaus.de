import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() activeFilter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  filter(filter: string) {
    this.activeFilter.emit(filter);
  }
}
