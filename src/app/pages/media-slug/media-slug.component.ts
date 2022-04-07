import { Component, OnInit } from '@angular/core';
import { CmsService } from '../../service/cms.service'


@Component({
  selector: 'app-media-slug',
  templateUrl: './media-slug.component.html',
  styleUrls: ['./media-slug.component.scss']
})
export class MediaSlugComponent implements OnInit {
  content: any = {}
  slug: string = ""
  waiting: boolean = false
  constructor(private service: CmsService) {
  }

  getMediaContent(): void {
    this.service.getMediaContent(this.slug).subscribe(res => {
      this.content = res;
      this.waiting = true;
    })
  }

  ngOnInit(): void {
    this.slug = window.location.href.split("/").filter(e => Boolean(e))[3]
    this.getMediaContent()
  }

}