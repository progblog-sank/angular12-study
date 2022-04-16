import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  pageTitle: {
    pageName: string,
    componentName: string
    show: boolean
  }[]
  isLogin: boolean = Boolean(sessionStorage.getItem('isLogin')) ?? false;
  constructor(private snackBar: MatSnackBar) {
    this.pageTitle = [
      {
        pageName: 'ホーム',
        componentName: 'home',
        show: true,
      },
      {
        pageName: '作成ログ',
        componentName: 'media',
        show: true,

      },
      {
        pageName: 'お問い合わせ',
        componentName: 'contact',
        show: true,

      },
      {
        pageName: 'お問い合わせ一覧',
        componentName: 'contactList',
        show: this.isLogin,

      },

    ];
  }
  ngOnInit(): void {
  }

}
