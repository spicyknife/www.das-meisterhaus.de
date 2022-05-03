import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinsbindungComponent } from './zinsbindung.component';

describe('ZinsbindungComponent', () => {
  let component: ZinsbindungComponent;
  let fixture: ComponentFixture<ZinsbindungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinsbindungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinsbindungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
