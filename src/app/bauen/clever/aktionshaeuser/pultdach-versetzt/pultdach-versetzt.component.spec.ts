import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PultdachVersetztComponent } from './pultdach-versetzt.component';

describe('PultdachVersetztComponent', () => {
  let component: PultdachVersetztComponent;
  let fixture: ComponentFixture<PultdachVersetztComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PultdachVersetztComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PultdachVersetztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
