import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import * as _ from 'underscore';

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
    this.orderDataSource.next(data);
    this.saveToStorage(data);
  }

  clear() {
    this.orderDataSource.next([]);
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

}