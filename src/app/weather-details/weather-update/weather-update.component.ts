import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-weather-update',
  templateUrl: './weather-update.component.html',
  styleUrls: ['./weather-update.component.css']
})
export class WeatherUpdateComponent implements OnInit {

  cityName : string = "";
  iconUrl : string = "";
  temperature : number = 0;
  temp_max : number = 0;
  temp_min : number = 0;
  description : string = "";

  constructor(private dataService : DataService) {

  }

  ngOnInit(): void {
    let dataObject = this.dataService.weatherData;
    this.cityName = dataObject.city;
    this.iconUrl = dataObject.iconUrl;
    this.temperature = dataObject.temperature;
    this.temp_max = dataObject.temp_max;
    this.temp_min = dataObject.temp_min;
    this.description = dataObject.description;
    console.log(dataObject);
  }

}
