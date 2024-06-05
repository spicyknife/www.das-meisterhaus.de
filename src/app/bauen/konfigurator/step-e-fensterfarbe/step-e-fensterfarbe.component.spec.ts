import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEFensterfarbeComponent } from './step-e-fensterfarbe.component';

describe('StepEFensterfarbeComponent', () => {
  let component: StepEFensterfarbeComponent;
  let fixture: ComponentFixture<StepEFensterfarbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepEFensterfarbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepEFensterfarbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
