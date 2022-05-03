import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenzSliderComponent } from './referenz-slider.component';

describe('ReferenzSliderComponent', () => {
  let component: ReferenzSliderComponent;
  let fixture: ComponentFixture<ReferenzSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenzSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenzSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
