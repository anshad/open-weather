import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpModule]
    });
  });

  it(
    'should be created',
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy();
    })
  );
});
