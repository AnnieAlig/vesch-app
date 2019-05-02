import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
  ) { }

  getNews() {
    return this.http.get(apiUrl + 'news.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(apiUrl + 'news_' + id + '.json');
  }
}
