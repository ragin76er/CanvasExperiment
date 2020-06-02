import { Component, OnInit } from '@angular/core';
import { BrushSizeService } from '../brush-size-service';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-brush-size',
  templateUrl: './brush-size.component.html',
  styleUrls: ['./brush-size.component.scss']
})
export class BrushSizeComponent implements OnInit {

  get brushSize(): number {
    return this.brushSizeService.currentBrushSize;
  }
  set brushSize(value: number) {
    this.brushSizeService.currentBrushSize = value;
  }

  constructor(private brushSizeService: BrushSizeService) {
   }

  ngOnInit(): void {
    this.brushSize = 1;
  }

  onChangeComplete($event: MatSliderChange) {
    this.brushSize = $event.value;
  }

}
