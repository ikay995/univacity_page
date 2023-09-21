

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() {
  }
/**
 * To check if the web app is opened from a mobile phone
 */
  get isMobile() {
    return window.innerWidth <= 600;
  }


}
