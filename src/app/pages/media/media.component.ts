import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.microcms';
import axios from 'axios';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  mediaList: any
  constructor() {
    this.mediaList = []
  }

  ngOnInit(): void {
    window.setTimeout(() => {
      axios
        .get(environment.domain, {
          headers: { "x-microcms-api-key": environment.key },
        })
        .then((response) => {
          this.mediaList = response.data.contents
        });
    }, 1000)
  }

}
