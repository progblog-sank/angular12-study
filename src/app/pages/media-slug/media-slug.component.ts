import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.microcms';
import axios from 'axios';


@Component({
  selector: 'app-media-slug',
  templateUrl: './media-slug.component.html',
  styleUrls: ['./media-slug.component.scss']
})
export class MediaSlugComponent implements OnInit {
  content: any
  slug: string
  constructor() {
    this.content = {}
    this.slug = ''
  }

  ngOnInit(): void {
    this.slug = window.location.href.split("/").filter(e => Boolean(e))[3]
    axios
      .get(environment.domain + '/' + this.slug, {
        headers: { "x-microcms-api-key": environment.key },
      })
      .then((response) => {
        this.content = response.data
      });
  }

}