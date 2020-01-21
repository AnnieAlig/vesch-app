import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

let apiUrl = '../assets/backend-data/';


@Injectable({
  providedIn: 'root'
})
export class LoyaltyService {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService
  ) {
    if (this.$localStorage.retrieve('default-language') &&
    this.$localStorage.retrieve('default-language')  === 'ukr') {
      apiUrl += 'ukr/';
    }
  }

  getSlides(): Observable<any> {
    return this.http.get(apiUrl + 'slider-loyalty.json');
  }

  getPage(): Observable<any> {
    return this.http.get(apiUrl + 'loyalty.json');
  }
}
