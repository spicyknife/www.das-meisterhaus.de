import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrueppelwalmdachComponent } from './krueppelwalmdach.component';

describe('KrueppelwalmdachComponent', () => {
  let component: KrueppelwalmdachComponent;
  let fixture: ComponentFixture<KrueppelwalmdachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrueppelwalmdachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrueppelwalmdachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
