import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ColorEvent } from 'ngx-color';
import { ColourService } from '../colour.service';
import { Ihslcolour } from '../ihslcolour';

@Component({
  selector: 'app-color-picker-menu',
  templateUrl: './color-picker-menu.component.html',
  styleUrls: ['./color-picker-menu.component.scss']
})



export class ColorPickerMenuComponent {

get hexcolour(): string {
  return this.colourService.currentColourHex;
}
set hexcolour(value: string) {
  this.colourService.currentColourHex = value;
}

get rgbcolour(): Ihslcolour  {
  return this.colourService.currentColourHSLA;
}
set rgbcolour(value: Ihslcolour) {
  this.colourService.currentColourHSLA = value;
}

constructor(private colourService: ColourService) {}

  primaryColour = '#194D33';
  hexColour = this.primaryColour;
  state = {
    h: 150,
    s: 0.50,
    l: 0.20,
    a: 1,
  };

  changeComplete($event: ColorEvent) {
    this.state = $event.color.hsl;
    this.primaryColour = $event.color.hex;
    this.hexcolour = this.primaryColour;
    this.rgbcolour = this.state;
  }

  public getColourState() {
    return this.state;
  }

}
