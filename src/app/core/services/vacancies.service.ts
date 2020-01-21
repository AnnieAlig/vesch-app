import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

let apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService
  ) {
    if (this.$localStorage.retrieve('default-language') &&
    this.$localStorage.retrieve('default-language')  === 'ukr') {
      apiUrl += 'ukr/';
    }
  }

  getVacancies() {
    return this.http.get(apiUrl + 'vacancies.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(apiUrl + 'vacancy_' + id + '.json');
  }
}
