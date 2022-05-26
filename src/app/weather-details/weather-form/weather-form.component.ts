import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataService } from 'src/app/shared/services/data.service';
import { WeatherData } from '../../shared/models/weatherData';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
  formGroup: FormGroup
  private API_KEY : string= "db763e02f35c9cdf47b0e425f292b9ef";
  cityName : string;
  countryName : string;
  //showUpdate : boolean = false;

  constructor(private apiService : ApiService,
              private dataService : DataService, 
              private formBuilder: FormBuilder) {
    this.cityName = "";
    this.countryName = "";
    this.formGroup = formBuilder.group({
      cityName : ['', Validators.required],
      countryName : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getWeatherUpdate() {
    this.cityName = this.formGroup.value.cityName;
    this.countryName = this.formGroup.value.countryName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName},${this.countryName}&appid=${this.API_KEY}`;
    this.apiService.get(url).subscribe(res => {
      this.setWeatherData(res);
      console.log(res)
      // this.dataService.showUpdate = true;
      //console.log(res);
      this.dataService.showUpdate = true;
    }, error => {
      console.log(error);
    })
  }

  setWeatherData(response : any) {
    let dataObject = this.dataService.weatherData;
    dataObject.city = `${response.name}, ${response.sys.country}`;
    dataObject.country = response.sys.country;
    dataObject.main = response.weather[0].main,
    dataObject.iconUrl = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    dataObject.temperature = this.getCelsius(response.main.temp);
    dataObject.temp_max = this.getCelsius(response.main.temp_max);
    dataObject.temp_min = this.getCelsius(response.main.temp_min);
    dataObject.description = response.weather[0].description;
  }

  getCelsius(temperature : number) {
      let tempInCelsius = Math.floor(temperature - 273.15);
      return tempInCelsius;
  }
}
