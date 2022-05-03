import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuellComponent } from './individuell.component';

describe('IndividuellComponent', () => {
  let component: IndividuellComponent;
  let fixture: ComponentFixture<IndividuellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
