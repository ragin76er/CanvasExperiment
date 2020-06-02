import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCanvasComponent } from './save-canvas.component';

describe('SaveCanvasComponent', () => {
  let component: SaveCanvasComponent;
  let fixture: ComponentFixture<SaveCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
