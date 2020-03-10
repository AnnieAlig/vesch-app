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
    return this.http.get(environment.apiDataUrl + `cart_${id}.json`);
  }

  submit(order, info): Observable<any> {
    const data = {
      order: order,
      info: info
    };
    console.log('data', data);
    return this.http.post(environment.apiUrl + 'do_order', data, httpOptions);
    // return of(new HttpResponse({ status: 200, body: 'success' }));
  }
}
