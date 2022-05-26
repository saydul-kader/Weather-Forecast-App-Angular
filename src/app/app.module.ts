import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherFormComponent } from './weather-details/weather-form/weather-form.component';
import { WeatherUpdateComponent } from './weather-details/weather-update/weather-update.component';
import { WeatherDetailsModule } from './weather-details/weather-details.module';
@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
