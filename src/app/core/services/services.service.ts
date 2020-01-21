import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

let apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService
  ) {
    if (this.$localStorage.retrieve('default-language') &&
    this.$localStorage.retrieve('default-language')  === 'ukr') {
      apiUrl += 'ukr/';
    }
  }

  getServices() {
    return this.http.get(apiUrl + 'services-list.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(apiUrl + 'service_' + id + '.json');
  }
}
