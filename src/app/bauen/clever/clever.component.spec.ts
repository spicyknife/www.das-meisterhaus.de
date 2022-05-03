import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleverComponent } from './clever.component';

describe('CleverComponent', () => {
  let component: CleverComponent;
  let fixture: ComponentFixture<CleverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
