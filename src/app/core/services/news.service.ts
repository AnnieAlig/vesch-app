import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

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
}
