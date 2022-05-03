import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PultdachComponent } from './pultdach.component';

describe('PultdachComponent', () => {
  let component: PultdachComponent;
  let fixture: ComponentFixture<PultdachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PultdachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PultdachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
