import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

let apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService
  ) {
    if (this.$localStorage.retrieve('default-language') &&
    this.$localStorage.retrieve('default-language')  === 'ukr') {
      apiUrl += 'ukr/';
    }
  }

  getOffers(): Observable<any> {
    return this.http.get(apiUrl + 'offers.json');
  }

  getSomeOffers(): Observable<any> {
    return this.http.get(apiUrl + 'offers-some.json');
  }

  getPage(id: number|string): Observable<any> {
    return this.http.get(apiUrl + 'offer_' + id + '.json');
  }

  getItemPage(id: number|string, parentId: number|string): Observable<any> {
    return this.http.get(apiUrl + 'offer-item_' + parentId + '_' + id + '.json');
  }
}
