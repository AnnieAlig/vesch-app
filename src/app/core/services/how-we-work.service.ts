import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = '../assets/backend-data/';

@Injectable({
  providedIn: 'root'
})
export class HowWeWorkService {

  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<any> {
    return this.http.get(apiUrl + 'how-we-work.json');
  }

}
