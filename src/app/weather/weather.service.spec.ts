import {
  HttpModule,
  XHRBackend,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherService,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ],
      imports: [HttpModule]
    });
  });

  it(
    'should be created',
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return observable of Observable<any[]>',
    inject([WeatherService, XHRBackend], (weatherService, mockBackend) => {
      const mockResponse = {
        cod: '200',
        message: 0.0096,
        cnt: 38,
        list: [
          {
            dt: 1508738400,
            main: {
              temp: 31.35,
              temp_min: 25.82,
              temp_max: 31.35,
              pressure: 928.08,
              sea_level: 1024.38,
              grnd_level: 928.08,
              humidity: 73,
              temp_kf: 5.54
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '02d'
              }
            ],
            clouds: {
              all: 8
            },
            wind: {
              speed: 4.61,
              deg: 308.505
            },
            rain: {},
            sys: {
              pod: 'd'
            },
            dt_txt: '2017-10-23 06:00:00'
          },
          {
            dt: 1508749200,
            main: {
              temp: 29.89,
              temp_min: 25.74,
              temp_max: 29.89,
              pressure: 926.17,
              sea_level: 1022.02,
              grnd_level: 926.17,
              humidity: 62,
              temp_kf: 4.15
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d'
              }
            ],
            clouds: {
              all: 92
            },
            wind: {
              speed: 4.48,
              deg: 322.503
            },
            rain: {},
            sys: {
              pod: 'd'
            },
            dt_txt: '2017-10-23 09:00:00'
          }
        ],
        city: {
          id: 1277333,
          name: 'Bangalore',
          coord: {
            lat: 12.9762,
            lon: 77.6033
          },
          country: 'IN'
        }
      };

      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(
          new Response(
            new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })
          )
        );
      });

      weatherService.getWeatherForecast().subscribe(weather => {
        weather = weather[0];
        expect(weather.length).toBe(2);
        expect(weather[0].dt).toEqual(1508738400);
      });
    })
  );
});
