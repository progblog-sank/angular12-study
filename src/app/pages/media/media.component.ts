import { Component, OnInit } from '@angular/core';
import { CmsService } from '../../service/cms.service'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  mediaList: any
  constructor(private service: CmsService) {
    this.mediaList = []
  }

  getMediaList(): void {
    this.service.getMediaList().subscribe(res => {
      this.mediaList = res.contents;
    })
  }

  ngOnInit(): void {
    this.getMediaList()
  }

}
