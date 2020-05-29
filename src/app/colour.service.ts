import { Injectable } from '@angular/core';
import { Ihslcolour } from './ihslcolour';

@Injectable({
  providedIn: 'root'
})

export class ColourService {

  currentColourHex: string;
  currentColourHSLA: Ihslcolour;

  constructor() {
    this.currentColourHex = '#194D33';
    this.currentColourHSLA = {
    h: 150,
    s: 0.50,
    l: 0.20,
    a: 1,
    };
  }
}
