import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlachdachComponent } from './flachdach.component';

describe('FlachdachComponent', () => {
  let component: FlachdachComponent;
  let fixture: ComponentFixture<FlachdachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlachdachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlachdachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
