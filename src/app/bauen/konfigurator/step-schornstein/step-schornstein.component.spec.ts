import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFSchornsteinComponent } from './step-schornstein.component';

describe('StepFSchornsteinComponent', () => {
  let component: StepFSchornsteinComponent;
  let fixture: ComponentFixture<StepFSchornsteinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFSchornsteinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFSchornsteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
