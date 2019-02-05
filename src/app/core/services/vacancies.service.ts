import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(
    private http: HttpClient,
  ) { }

  getVacancies() {
    return this.http.get(apiUrl + 'vacancies.json');
  }
}
