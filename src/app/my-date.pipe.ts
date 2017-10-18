import { Pipe, PipeTransform } from '@angular/core';

/**
 * Parse API datetime to javascript date object
 *
 * __Usage :__
 *   value | myDate
 *
 * __Example :__
 *   {{ 1508349600 |  myDate }}
 *   formats to: Date 2017-10-18T18:00:00.000Z
 */
@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  /**
   * Parse function
   * @param {any} value The input datetime
   * @returns {any} The parsed date object
   */
  transform(value: any): any {
    return new Date(value * 1000);
  }

}
