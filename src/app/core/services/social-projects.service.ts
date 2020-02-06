import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocialProjectsService {

  constructor(
    private http: HttpClient,
  ) {}

  getProjects() {
    return this.http.get(environment.apiUrl + 'social_projects.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + 'social_projects_' + id + '.json');
  }
}
