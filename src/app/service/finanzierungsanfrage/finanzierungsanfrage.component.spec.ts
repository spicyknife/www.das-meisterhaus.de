import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzierungsanfrageComponent } from './finanzierungsanfrage.component';

describe('FinanzierungsanfrageComponent', () => {
  let component: FinanzierungsanfrageComponent;
  let fixture: ComponentFixture<FinanzierungsanfrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanzierungsanfrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanzierungsanfrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
