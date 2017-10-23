import { Component } from '@angular/core';

/**
 * HeaderComponent for rendering app header
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Application title
   */
  title = 'Open Weather Forecast - Bangalore, India';
  /**
   * Creates an instance of HeaderComponent.
   */
  constructor() {}
}
