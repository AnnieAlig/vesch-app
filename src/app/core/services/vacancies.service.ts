import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(
    private http: HttpClient,
  ) {}

  getVacancies() {
    return this.http.get(environment.apiDataUrl + 'vacancies.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'vacancy_' + id + '.json');
  }
}
