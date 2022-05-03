import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalmdachComponent } from './walmdach.component';

describe('WalmdachComponent', () => {
  let component: WalmdachComponent;
  let fixture: ComponentFixture<WalmdachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalmdachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalmdachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
