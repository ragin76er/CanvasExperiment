import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear-canvas',
  templateUrl: './clear-canvas.component.html',
  styleUrls: ['./clear-canvas.component.scss']
})
export class ClearCanvasComponent implements OnInit {
  @Output() clearCanvas = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clearTheCanvas() {
    this.clearCanvas.emit(true);
  }

}
