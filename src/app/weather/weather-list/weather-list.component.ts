import { WeatherService } from './../weather.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {

  @Input() weathers: any;

  constructor() { }

  ngOnInit() {

  }
}
