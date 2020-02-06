import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private http: HttpClient,
  ) {  }

  getCart(id): Observable<any> {
    return this.http.get(environment.apiUrl + `cart_${id}.json`);
  }

  submit(order, info): Observable<any> {
    const data = {
      order: order,
      info: info
    };
    // return this.http.post(environment.apiUrl + 'submit', data, httpOptions);
    console.log('data', data);
    return of(new HttpResponse({ status: 200, body: 'success' }));
  }
}
