import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktionshaeuserComponent } from './aktionshaeuser.component';

describe('AktionshaeuserComponent', () => {
  let component: AktionshaeuserComponent;
  let fixture: ComponentFixture<AktionshaeuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktionshaeuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktionshaeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
