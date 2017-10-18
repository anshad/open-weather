import { WeatherService } from './weather/weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  weatherForecastData: string[];
  errorMessage: any;

  constructor(private _weatherService_: WeatherService) { }

  ngOnInit() {
    this._weatherService_.getWeatherForecast()
      .subscribe(
      data => {
        this.weatherForecastData = data;
      },
      err => {
        this.errorMessage = <any>err;
      });
  }
}
