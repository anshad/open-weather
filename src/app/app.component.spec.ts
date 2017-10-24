import { WeatherService } from './weather/weather.service';
import { Observable } from 'rxjs/Observable';
import { MyDatePipe } from './my-date.pipe';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let _weatherService_: WeatherService;
  let de: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          HeaderComponent,
          WeatherListComponent,
          MyDatePipe
        ],
        providers: [WeatherService],
        imports: [HttpModule]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;
      _weatherService_ = fixture.debugElement.injector.get(WeatherService);
    })
  );

  /**
   * Test instance
   */
  it(
    'should create the app',
    async(() => {
      expect(component).toBeTruthy();
    })
  );

  it('should set weatherForecastData', () => {
    //
  });
});
