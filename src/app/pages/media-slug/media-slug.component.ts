import { Component, OnInit } from '@angular/core';
import { CmsService } from '../../service/cms.service'


@Component({
  selector: 'app-media-slug',
  templateUrl: './media-slug.component.html',
  styleUrls: ['./media-slug.component.scss']
})
export class MediaSlugComponent implements OnInit {
  content: any
  slug: string
  constructor(private service: CmsService) {
    this.content = {}
    this.slug = ''
  }

  getMediaContent(): void {
    this.service.getMediaContent(this.slug).subscribe(res => {
      this.content = res;
    })
  }

  ngOnInit(): void {
    this.slug = window.location.href.split("/").filter(e => Boolean(e))[3]
    this.getMediaContent()
  }

}