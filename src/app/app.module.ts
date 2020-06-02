
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorPickerMenuComponent } from './color-picker-menu/color-picker-menu.component';
import { MatMenuModule, GestureConfig, MatDividerModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { BrushSizeComponent } from './brush-size/brush-size.component';
import { BrushSizeService } from './brush-size-service';
import { ColourService } from './colour.service';
import { ClearCanvasComponent } from './clear-canvas/clear-canvas.component';
import { SaveCanvasComponent } from './canvas/save-canvas/save-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ColorPickerMenuComponent,
    BrushSizeComponent,
    ClearCanvasComponent,
    SaveCanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorSketchModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSliderModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
