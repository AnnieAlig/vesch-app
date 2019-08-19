import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class SocialProjectsService {

  constructor(
    private http: HttpClient,
  ) { }

  getProjects() {
    return this.http.get(apiUrl + 'social_projects.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(apiUrl + 'social_projects_' + id + '.json');
  }
}
