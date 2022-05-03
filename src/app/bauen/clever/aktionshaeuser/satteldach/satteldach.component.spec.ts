import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatteldachComponent } from './satteldach.component';

describe('SatteldachComponent', () => {
  let component: SatteldachComponent;
  let fixture: ComponentFixture<SatteldachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatteldachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatteldachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
