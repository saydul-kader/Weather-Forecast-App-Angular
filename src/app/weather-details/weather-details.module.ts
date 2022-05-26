import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherUpdateComponent } from './weather-update/weather-update.component';
import { WeatherDetailsComponent } from './weather-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WeatherFormComponent,
    WeatherUpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    WeatherFormComponent,
    WeatherUpdateComponent
  ]
})
export class WeatherDetailsModule { }
