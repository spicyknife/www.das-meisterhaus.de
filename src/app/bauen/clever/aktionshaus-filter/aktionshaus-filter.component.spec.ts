import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktionshausFilterComponent } from './aktionshaus-filter.component';

describe('AktionshausFilterComponent', () => {
  let component: AktionshausFilterComponent;
  let fixture: ComponentFixture<AktionshausFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktionshausFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktionshausFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
