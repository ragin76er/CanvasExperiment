import { Injectable } from '@angular/core';
import { Ihslcolour } from './ihslcolour';

@Injectable({
  providedIn: 'root'
})

export class ColourService {

  currentColourHex: string;
  currentColourHSLA: Ihslcolour;

  constructor() { }
}
