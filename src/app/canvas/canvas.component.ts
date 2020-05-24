import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { ColorPickerMenuComponent } from '../color-picker-menu/color-picker-menu.component';
import { ColourService } from '../colour.service';
import { Ihslcolour } from '../ihslcolour';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public width = 1150;
  @Input() public height = 1000;

  constructor(private colourService: ColourService) {}

  private cx: CanvasRenderingContext2D;
  primaryColor = '#194D33';

  get hexcolour(): string {
    return this.colourService.currentColourHex;
  }

  get hslacolour(): Ihslcolour {
    return this.colourService.currentColourHSLA;
  }

  public ngAfterViewInit() {
    const canvasE1: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasE1.getContext('2d');

    canvasE1.width = this.width;
    canvasE1.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = this.hexcolour;

    this.captureEvents(canvasE1);
  }

public changeColourEvent(color: string) {
  this.cx.strokeStyle = color;
}

private captureEvents(canvasE1: HTMLCanvasElement) {
  fromEvent(canvasE1, 'mousedown')
  .pipe(
    switchMap((e) => {
      return fromEvent(canvasE1, 'mousemove')
      .pipe(
        takeUntil(fromEvent(canvasE1, 'mouseup')),
        takeUntil(fromEvent(canvasE1, 'mouseleave')),
        pairwise()
      );
    })
  )
  .subscribe((res: [MouseEvent, MouseEvent]) => {
    const rect = canvasE1.getBoundingClientRect();

    const prevPos = {
      x: res[0].clientX - rect.left,
      y: res[0].clientY - rect.top,
      press: 1,
      anglex: 0
    };

    const currentPos = {
      x: res[1].clientX - rect.left,
      y: res[1].clientY - rect.top,
      press: 1,
      anglex: 0
    };

    this.drawOnCanvas(prevPos, currentPos);
  });

  fromEvent(canvasE1, 'pointerdown')
  .pipe(
    switchMap((e) => {
      return fromEvent(canvasE1, 'pointermove')
    .pipe(
      takeUntil(fromEvent(canvasE1, 'pointerup')),
      takeUntil(fromEvent(canvasE1, 'pointerleave')),
      pairwise()
    );
    })
  )
  .subscribe((res: [PointerEvent, PointerEvent]) => {
    const rect = canvasE1.getBoundingClientRect();

    const prevPos = {
      x: res[0].clientX - rect.left,
      y: res[0].clientY - rect.top,
      press: res[0].pressure,
      anglex: res[0].tiltX
    };

    const currentPos = {
      x: res[1].clientX - rect.left,
      y: res[1].clientY - rect.top,
      press: res[1].pressure,
      anglex: res[1].tiltX
    };
    this.drawOnCanvas(prevPos, currentPos);
  });
}

private drawOnCanvas(prevPos: {x: number, y: number, press: number, anglex: number},
                     currentPos: {x: number, y: number, press: number, anglex: number}) {
    if (!this.cx) {return; }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);

      this.cx.lineTo(currentPos.x, currentPos.y);

      const alpha: string = this.convertPressureToHex(prevPos.press);

      if (this.hexcolour != null){
        let hexcolourWithAlpha: string = this.hexcolour.toString();

        hexcolourWithAlpha = hexcolourWithAlpha.concat(alpha.toString());

        this.cx.strokeStyle = hexcolourWithAlpha;
        this.cx.lineWidth = this.convertAngleToLineWidth(prevPos.anglex);

        console.log(prevPos.anglex);
      }

      this.cx.stroke();
    }

  }

  private convertPressureToHex(pressure: number): string {
    let convert: number = pressure * 255.0;
    let remainder: number = convert % 16;

    convert = Math.trunc(convert / 16.0);
    let alphaConvert: string = convert.toString();
    if (convert > 9) {
      alphaConvert = this.convertGreaterThan10ToAlpha(convert);
    }
    remainder = Math.trunc(remainder);
    let alphaRemainder: string = remainder.toString();
    if (remainder > 9) {
      alphaRemainder = this.convertGreaterThan10ToAlpha(remainder);
    }

    return alphaConvert.concat(remainder.toString());
  }


  private convertGreaterThan10ToAlpha(num: number): string {
    switch (num) {
      case(10):
        return 'A';
      case(11):
        return 'B';
      case(12):
        return 'C';
      case(13):
        return 'D';
      case(14):
        return 'E';
      case(15):
        return 'F';
    }
  }

  private convertAngleToLineWidth(num: number): number {
    return Math.trunc(num / 2);
  }

}
