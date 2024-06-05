import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGAusstattungComponent } from './step-g-ausstattung.component';

describe('StepGAusstattungComponent', () => {
  let component: StepGAusstattungComponent;
  let fixture: ComponentFixture<StepGAusstattungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepGAusstattungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepGAusstattungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
