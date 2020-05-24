import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerMenuComponent } from './color-picker-menu.component';

describe('ColorPickerMenuComponent', () => {
  let component: ColorPickerMenuComponent;
  let fixture: ComponentFixture<ColorPickerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
