import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  pageTitle: {
    pageName: string,
    componentName: string
  }[]
  constructor() {
    this.pageTitle = [
      {
        pageName: 'ホーム',
        componentName: 'home'
      },
      {
        pageName: 'お問い合わせ',
        componentName: 'contact'
      }

    ];
  }
  ngOnInit(): void {
  }

}