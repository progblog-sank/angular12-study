import { Component, OnInit, HostListener } from '@angular/core';
import { UtilsService } from '../../service/utils.service'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {

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
