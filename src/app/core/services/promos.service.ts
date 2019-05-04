import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class PromosService {

  constructor(
    private http: HttpClient,
  ) { }

  getPromos() {
    return this.http.get(apiUrl + 'promos.json');
  }
  getPage(id: number): Observable<any> {
    return this.http.get(apiUrl + 'promo_' + id + '.json');
  }
}
