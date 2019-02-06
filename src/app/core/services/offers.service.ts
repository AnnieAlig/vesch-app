import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(
    private http: HttpClient,
  ) { }

  getOffers() {
    return this.http.get(apiUrl + 'offers.json');
  }
}
