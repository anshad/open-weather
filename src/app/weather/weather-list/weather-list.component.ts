import { WeatherService } from './../weather.service';
import { Component, Input } from '@angular/core';

/**
 * WeatherListComponent for rendering weather forecast tile
 */
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  providers: [WeatherService]
})
export class WeatherListComponent {
  /**
   * Input binding for weather list
   * @type {*}
   */
  @Input() weathers: any;

  /**
   * Creates an instance of WeatherListComponent.
   */
  constructor() {}
}
