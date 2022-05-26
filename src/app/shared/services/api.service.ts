import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weatherData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http : HttpClient) { 
  }

  public get(route : string): Observable<any> {
    const url = route;
    return this.http.get(url);
  }
}
