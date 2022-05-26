export class WeatherData {
    city: string;
    country: string;
    main: any;
    iconUrl: any;
    temperature: number;
    temp_max: number;
    temp_min: number;
    description: any;

    constructor(){
      this.city = "";
      this.country = "";
      this.temperature = 0;
      this.temp_max = 0;
      this.temp_min = 0;  
    }
}