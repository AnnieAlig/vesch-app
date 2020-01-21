import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

let apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService
  ) {
    if (this.$localStorage.retrieve('default-language') &&
    this.$localStorage.retrieve('default-language')  === 'ukr') {
      apiUrl += 'ukr/';
    }
  }

  getNews() {
    return this.http.get(apiUrl + 'news.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(apiUrl + 'news_' + id + '.json');
  }
}
