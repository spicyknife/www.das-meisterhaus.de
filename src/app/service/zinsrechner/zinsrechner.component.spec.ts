import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinsrechnerComponent } from './zinsrechner.component';

describe('ZinsrechnerComponent', () => {
  let component: ZinsrechnerComponent;
  let fixture: ComponentFixture<ZinsrechnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinsrechnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinsrechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
