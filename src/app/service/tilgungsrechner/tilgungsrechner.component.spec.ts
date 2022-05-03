import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilgungsrechnerComponent } from './tilgungsrechner.component';

describe('TilgungsrechnerComponent', () => {
  let component: TilgungsrechnerComponent;
  let fixture: ComponentFixture<TilgungsrechnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilgungsrechnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilgungsrechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
