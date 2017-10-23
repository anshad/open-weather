import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;
    })
  );

  /**
   * Test instance
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test title
   */
  it('should have a title `Open Weather Forecast - Bangalore, India`', () => {
    fixture.detectChanges();
    const el = de.query(By.css('h2')).nativeElement;
    expect(component.title).toEqual('Open Weather Forecast - Bangalore, India');
    expect(el.textContent).toEqual('Open Weather Forecast - Bangalore, India');
  });
});
