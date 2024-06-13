import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'step-bauweise',
  templateUrl: './step-bauweise.component.html',
  styleUrls: ['./step-bauweise.component.scss',
    './../konfigurator.component.scss'
  ]
})
export class StepBauweise implements OnInit {

  @Input() formular: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

}
