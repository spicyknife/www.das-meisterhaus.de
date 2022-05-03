import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttikaComponent } from './attika.component';

describe('AttikaComponent', () => {
  let component: AttikaComponent;
  let fixture: ComponentFixture<AttikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
