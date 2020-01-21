import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

let apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configDataSource = new BehaviorSubject<any>([]);
  configData = this.configDataSource.asObservable();

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService
  ) {
    if (this.$localStorage.retrieve('default-language') &&
    this.$localStorage.retrieve('default-language')  === 'ukr') {
      apiUrl += 'ukr/';
    }
  }

  getConfig(): Observable<any> {
    return this.http.get(apiUrl + 'config.json');
  }

  store(data: any) {
    this.configDataSource.next(data);
  }
}
