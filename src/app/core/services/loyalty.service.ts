import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = '../assets/backend-data/';


@Injectable({
  providedIn: 'root'
})
export class LoyaltyService {

  constructor(
    private http: HttpClient,
  ) { }

  getSlides(): Observable<any> {
    return this.http.get(apiUrl + 'slider-loyalty.json');
  }

  getPage(): Observable<any> {
    return this.http.get(apiUrl + 'loyalty.json');
  }
}
