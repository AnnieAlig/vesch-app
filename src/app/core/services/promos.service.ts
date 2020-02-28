import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PromosService {

  constructor(
    private http: HttpClient,
  ) {}

  getPromos() {
    return this.http.get(environment.apiDataUrl + 'promos.json');
  }
  getPage(id: number): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'promo_' + id + '.json');
  }
}
