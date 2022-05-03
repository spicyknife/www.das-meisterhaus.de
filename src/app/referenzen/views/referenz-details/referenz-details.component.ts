import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-referenz-details',
  templateUrl: './referenz-details.component.html',
  styleUrls: ['./referenz-details.component.scss']
})
export class ReferenzDetailsComponent implements OnInit {
  // ********** REFERENCE-DETAILS ********** //
  @Input() referenceDetails: string[] = [];

  constructor() {}

  ngOnInit() {}
}
