import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as _ from 'underscore';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class OrderItem {
  name = '';
  photo = '';
  price: number = null;
  currency = '';
  id: number = null;
  quantity: number = null;
}
@Injectable({
  providedIn: 'root'
})


export class OrderService {
  private orderDataSource = new BehaviorSubject<any>([]);
  private orderDataValue = [];
  orderData = this.orderDataSource.asObservable();

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService
  ) {}

  add(item: any, number?: number) {
    const itemInCart: any = _.findWhere(this.orderDataValue, {id: item.id});
    const itemKey = _.indexOf(this.orderDataValue, itemInCart);
    if (!number) {
      if (itemInCart) {
        // add quantity
        this.orderDataValue[itemKey].quantity += 1;
      } else {
        // add new item
        item.quantity = 1;
        this.orderDataValue.push(item);
      }
    } else {
      if (itemInCart) {
        // add quantity
        this.orderDataValue[itemKey].quantity = number;
      } else {
        // add new item
        this.orderDataValue.push(item);
      }
    }
    this.update(this.orderDataValue);
  }

  remove(item: any, number?: number) {
    const itemInCart: any = _.findWhere(this.orderDataValue, {id: item.id});
    const itemKey = _.indexOf(this.orderDataValue, itemInCart);
    // remove one from quantity
    if (number) {
      this.orderDataValue[itemKey].quantity -= number;
    }
    if (!number || this.orderDataValue[itemKey].quantity <= 0) {
      // remove all
      this.orderDataValue = _.without(this.orderDataValue, _.findWhere(this.orderDataValue, {id: item.id}));
    }
    this.update(this.orderDataValue);
  }

  update(data: any) {
    this.sendCart(data).subscribe(
      (result) => {
        this.orderDataSource.next(result);
        this.saveToStorage(result);
      }
    );
  }

  clear() {
    this.orderDataSource.next([]);
  }

  submit(data: any): Observable<any> {
    console.log(data);
    // return this.http.post( environment.apiUrl, data, httpOptions);
    return of({status: 'success', order: 1262});
  }

  sendCart(cart: any): Observable<any> {
    if (!this.$localStorage.retrieve('customer-id')) {
      const id = (new Date().getTime()).toString() + (Math.floor(Math.random() * Math.floor(99))).toString();
      this.$localStorage.store('customer-id', +id);
    }
    const data = {
      customer: this.$localStorage.retrieve('customer-id'),
      cart: cart
    };
    return this.http.post( environment.apiUrl + '/add_to_cart', data, httpOptions);
    // return this.http.get( environment.apiUrl + '/order.json', httpOptions);
    // return of(cart);
  }

  saveToStorage(data) {
    this.$localStorage.store('order-data', JSON.stringify(data));
  }

  getFromStorage() {
    if (this.$localStorage.retrieve('order-data')) {
      this.orderDataValue = JSON.parse(this.$localStorage.retrieve('order-data'));
    } else {
      this.orderDataValue = [];
    }
   this.orderDataSource.next(this.orderDataValue);
  }

  getOrder(customer: any): Observable<any> {
    console.log(customer);
    return this.http.get( environment.apiUrl + '/order.json?customer=' + customer, httpOptions);
    // return of(JSON.parse(this.$localStorage.retrieve('order-data')));
  }

  set(order) {
    this.orderDataSource.next(order);
  }
}
