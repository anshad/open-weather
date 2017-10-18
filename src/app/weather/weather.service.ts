import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeatherForecast(): Observable<any[]> {
    return this.http.get(
      environment.baseUrl +
      '?id=' + environment.cityId +
      '&appid=' + environment.appId +
      '&units=metric'
    )
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    return Observable.throw(errMsg);
  }

  private groupBy(arr: any, key: string) {
    return arr.reduce((rv, x) => {
      const cDate = new Date(x[key] * 1000);
      const monthFormat = `${cDate.getMonth() + 1}/${cDate.getDate()}/${cDate.getFullYear()}`;
      (rv[monthFormat] = rv[monthFormat] || []).push(x);
      return rv;
    }, {});
  }

  private extractData(res: any) {
    let body = res.json();
    body = body.list || {};
    body = this.groupBy(body, 'dt');
    body = Object.values(body);
    return body.slice(0, 5);
  }

}
