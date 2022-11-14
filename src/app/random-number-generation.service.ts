import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberGenerationService {

  constructor() { }

  GetRandomNumber(min: number, max: number) : number
  {
    return Math.floor(Math.random() * max) + min;
  }
}
