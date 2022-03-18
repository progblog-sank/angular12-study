import { Component, OnInit, HostListener } from '@angular/core';
import { UtilsService } from '../../service/utils.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // init
  responsive: string;

  constructor(private service: UtilsService) {
    this.responsive = 'pc'
  }

  ngOnInit(): void {
    this.responsive = this.service.getResponsive();
  }

  // リサイズ時に発火
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 990) {
      this.responsive = 'mobile'
    } else {
      this.responsive = 'pc'
    }
  }
}