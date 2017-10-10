import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { MyDatePipe } from './my-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherListComponent,
    MyDatePipe
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
