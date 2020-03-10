import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) {}

  getProducts() {
    return this.http.get(environment.apiDataUrl + 'products.json');
  }

  getPage(id: number): Observable<any> {
    return this.http.get(environment.apiDataUrl + 'products_' + id + '.json');
  }
}
