import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
  ) {}

  getServices() {
    return this.http.get(environment.apiDataUrl + 'services-list.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'service_' + id + '.json');
  }
}
