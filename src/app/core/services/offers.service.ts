import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(
    private http: HttpClient,
  ) { }

  getOffers(): Observable<any> {
    return this.http.get(apiUrl + 'offers.json');
  }

  getSomeOffers(): Observable<any> {
    return this.http.get(apiUrl + 'offers-some.json');
  }

  getPage(id: number|string): Observable<any> {
    return this.http.get(apiUrl + 'offer_' + id + '.json');
  }
}
