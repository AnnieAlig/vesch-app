import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) {}

  getHomepage(): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'homepage.json');
  }

  getBlackTie(): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'black-tie.json');
  }

  getMapList(): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'map-list.json');
  }
}
