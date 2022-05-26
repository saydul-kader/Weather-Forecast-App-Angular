import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  showForm : boolean = true;
  showWeatherUpdate : boolean = false; 
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  showDetails() {
    if(this.dataService.showUpdate) {
      this.showWeatherUpdate = true;
    }
    return this.showWeatherUpdate;
  }

}
