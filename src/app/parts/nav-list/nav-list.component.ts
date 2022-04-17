import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  pageTitle: {
    pageName: string,
    componentName: string,
    isBlank: boolean,
    show: boolean
  }[]
  isLogin: boolean = Boolean(sessionStorage.getItem('isLogin')) ?? false;
  constructor(private router: Router) {
    this.pageTitle = [
      {
        pageName: 'ホーム',
        componentName: 'home',
        isBlank: false,
        show: true,
      },
      {
        pageName: '作成ログ',
        componentName: 'media',
        isBlank: false,
        show: true,

      },
      {
        pageName: 'お問い合わせ',
        componentName: 'contact',
        isBlank: false,
        show: true,

      },
      {
        pageName: 'お問い合わせ一覧',
        componentName: 'contactList',
        isBlank: false,
        show: this.isLogin,
      },
      {
        pageName: 'コンテンツを管理する',
        componentName: 'https://create-angular.microcms.io/apis/media',
        isBlank: true,
        show: this.isLogin,
      },

    ];
  }
  ngOnInit(): void {
  }
  pushRouter(link: string, isBlank:boolean) {
    if (!isBlank) {
      this.router.navigate([link]);
    } else {
      window.open(link, '_blank')
    }
  }
}
