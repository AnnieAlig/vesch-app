import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(
    private http: HttpClient,
  ) {}

  getOffers(): Observable<any> {
    return this.http.get(environment.apiUrl + 'offers.json');
  }

  getSomeOffers(): Observable<any> {
    return this.http.get(environment.apiUrl + 'offers-some.json');
  }

  getPage(id: number|string): Observable<any> {
    return this.http.get(environment.apiUrl + 'offer_' + id + '.json');
  }

  getItemPage(id: number|string, parentId: number|string): Observable<any> {
    return this.http.get(environment.apiUrl + 'offer-item_' + parentId + '_' + id + '.json');
  }
}
