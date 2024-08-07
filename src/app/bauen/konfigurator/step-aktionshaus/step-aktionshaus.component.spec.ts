import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBComponent } from './step-aktionshaus.component';

describe('StepBComponent', () => {
  let component: StepBComponent;
  let fixture: ComponentFixture<StepBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
