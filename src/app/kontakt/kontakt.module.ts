import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { KontaktComponent } from './kontakt.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    KontaktComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, CommonModule, SharedModule, HttpClientModule, NgbToastModule],
  exports: [KontaktComponent],
  providers: [],
  bootstrap: []
})
export class KontaktModule {}
