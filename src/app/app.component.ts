import { WeatherService } from './weather/weather.service';
import { Component, OnInit } from '@angular/core';

/**
 * The main AppComponent in which the app bootstraps
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  /**
   * weather forecast data
   * @type {string[]}
   */
  weatherForecastData: string[];

  /**
   * Error message for api callback
   * @type {*}
   */
  errorMessage: any;

  /**
   * Creates an instance of AppComponent.
   * @param {WeatherService} _weatherService_ weatherservice injectable
   */
  constructor(private _weatherService_: WeatherService) {}

  /**
   * Initialize component
   */
  ngOnInit() {
    this.getWeather();
  }

  /**
   * Call weatherforecast api using injectable service
   */
  getWeather() {
    this._weatherService_.getWeatherForecast().subscribe(
      data => {
        this.weatherForecastData = data;
      },
      err => {
        this.errorMessage = <any>err;
      }
    );
  }
}
