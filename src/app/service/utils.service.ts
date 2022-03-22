import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  responsive: boolean

  constructor() {
    this.responsive = this.getResponsive();

  }

  getResponsive(): boolean {
    if (window.innerWidth < 990) {
      return false // mobile
    } else {
      return true // pc
    }
  }
}
