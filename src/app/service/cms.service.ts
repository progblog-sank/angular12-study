import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.microcms';


@Injectable({
  providedIn: 'root'
})
export class CmsService {

  private url = environment.domain;
  private httpOptions: any = {
    headers: new HttpHeaders({
      'x-microcms-api-key': environment.key
    }),
    body: null
  }

  constructor(private http: HttpClient) { }

  getMediaList(): Observable<any> {
    return this.http.get<any>(this.url, this.httpOptions);
  }

  getMediaContent(slug: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + slug, this.httpOptions);
  }
}

