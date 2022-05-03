import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetrechnerComponent } from './budgetrechner.component';

describe('BudgetrechnerComponent', () => {
  let component: BudgetrechnerComponent;
  let fixture: ComponentFixture<BudgetrechnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetrechnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetrechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
