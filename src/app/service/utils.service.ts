import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  responsive: string

  constructor() {
    this.responsive = this.getResponsive();

  }

  getResponsive(): string {
    if (window.innerWidth < 990) {
      return 'mobile'
    } else {
      return 'pc'
    }
  }
}
