import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configDataSource = new BehaviorSubject<any>([]);
  configData = this.configDataSource.asObservable();

  constructor(
    private http: HttpClient,
  ) {}

  getConfig(): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'config.json');
  }

  store(data: any) {
    this.configDataSource.next(data);
  }
}
