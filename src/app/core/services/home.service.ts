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

  getSlides(): Observable<any> {
    return this.http.get(environment.apiUrl + 'slider.json');
  }

  getBenefits(): Observable<any> {
    return this.http.get(environment.apiUrl + 'benefits.json');
  }

  getSteps(): Observable<any> {
    return this.http.get(environment.apiUrl + 'steps.json');
  }

  getServices(): Observable<any> {
    return this.http.get(environment.apiUrl + 'services.json');
  }

  getBlackTie(): Observable<any> {
    return this.http.get(environment.apiUrl + 'black-tie.json');
  }

  getMapList(): Observable<any> {
    return this.http.get(environment.apiUrl + 'map-list.json');
  }
}
