import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDDachfarbeComponent } from './step-dachfarbe.component';

describe('StepDDachfarbeComponent', () => {
  let component: StepDDachfarbeComponent;
  let fixture: ComponentFixture<StepDDachfarbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepDDachfarbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDDachfarbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
