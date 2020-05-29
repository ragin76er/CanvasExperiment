import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrushSizeService {

  currentBrushSize: number;
  constructor() {
    this.currentBrushSize = 1;
  }
}
