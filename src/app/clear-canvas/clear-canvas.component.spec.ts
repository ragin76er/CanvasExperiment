import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCanvasComponent } from './clear-canvas.component';

describe('ClearCanvasComponent', () => {
  let component: ClearCanvasComponent;
  let fixture: ComponentFixture<ClearCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
