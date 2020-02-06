import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
  ) {}

  getNews() {
    return this.http.get(environment.apiUrl + 'news.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + 'news_' + id + '.json');
  }
}
