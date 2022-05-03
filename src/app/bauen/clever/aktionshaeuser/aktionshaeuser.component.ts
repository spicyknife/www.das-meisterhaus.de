import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aktionshaeuser',
  templateUrl: './aktionshaeuser.component.html',
  styleUrls: ['./aktionshaeuser.component.scss']
})
export class AktionshaeuserComponent implements OnInit {
  @Input() filter: string = "";
  constructor() {}

  ngOnInit() {}
}
