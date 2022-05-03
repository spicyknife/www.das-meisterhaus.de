import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BauenComponent } from './bauen.component';

describe('BauenComponent', () => {
  let component: BauenComponent;
  let fixture: ComponentFixture<BauenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BauenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BauenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
