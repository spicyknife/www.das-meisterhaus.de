import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchrittCDachformComponent } from './step-dachform.component';

describe('SchrittCDachformComponent', () => {
  let component: SchrittCDachformComponent;
  let fixture: ComponentFixture<SchrittCDachformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchrittCDachformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchrittCDachformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
