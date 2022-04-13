import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.microcms';


@Injectable({
  providedIn: 'root'
})
export class CmsService {

  private url = environment.domain;
  private contactUrl = environment.domainContact;
  private httpOptions: any = {
    headers: new HttpHeaders({
      'x-microcms-api-key': environment.key
    }),
    body: null
  }

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


  getMediaList(): Observable<any> {
    return this.http.get<any>(this.url + '?limit=100', this.httpOptions);
  }

  getMediaContent(slug: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + slug, this.httpOptions);
  }

  // https://angular.jp/guide/http を参考に
  postContactContent(obj: any): Observable<any> {
    return this.http.post<any>(this.contactUrl, obj, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getContactList(): Observable<any> {
    return this.http.get<any>(this.contactUrl + '?limit=100', this.httpOptions);
  }

}

