import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl = '../assets/backend-data/';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }

  getSlides(): Observable<any> {
    return this.http.get(apiUrl + 'slider.json');
  }

  getBenefits(): Observable<any> {
    return this.http.get(apiUrl + 'benefits.json');
  }

  getSteps(): Observable<any> {
    return this.http.get(apiUrl + 'steps.json');
  }

  getServices(): Observable<any> {
    return this.http.get(apiUrl + 'services.json');
  }

  getBlackTie(): Observable<any> {
    return this.http.get(apiUrl + 'black-tie.json');
  }

  getMapList(): Observable<any> {
    return this.http.get(apiUrl + 'map-list.json');
  }
}
