import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weatherData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  weatherData : WeatherData = new WeatherData();
  showUpdate : boolean;
  constructor() { 
    this.showUpdate = false
  }
}
