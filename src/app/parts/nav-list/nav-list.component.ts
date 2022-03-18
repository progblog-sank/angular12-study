import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  pageTitle: string[]
  constructor() {
    this.pageTitle = ['ページ01', 'ページ02', 'ページ03', 'ページ04', 'ページ05'];
  }
  ngOnInit(): void {
  }

}
