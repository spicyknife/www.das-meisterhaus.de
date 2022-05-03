import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenzDetailsComponent } from './referenz-details.component';

describe('ReferenzDetailsComponent', () => {
  let component: ReferenzDetailsComponent;
  let fixture: ComponentFixture<ReferenzDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenzDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenzDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
