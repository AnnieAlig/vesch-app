import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyService {

  constructor(
    private http: HttpClient,
  ) {}

  getSlides(): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'slider-loyalty.json');
  }

  getPage(): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'loyalty.json');
  }
}
