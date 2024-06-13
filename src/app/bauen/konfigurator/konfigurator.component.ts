import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-konfigurator',
  templateUrl: './konfigurator.component.html',
  styleUrls: ['./konfigurator.component.scss']
})
export class KonfiguratorComponent implements OnInit {

  formular = this.formBuilder.group({ bauweise:[] })

  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
