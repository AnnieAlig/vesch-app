import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CallbackService {

  constructor(
    private http: HttpClient,
  ) { }

  send(data: any): Observable<any> {
    console.log(data);
    return this.http.post( environment.apiUrl + 'postdata/callback', data, httpOptions);
    // return of(new HttpResponse({ status: 200, body: 'success' }));
  }
}
