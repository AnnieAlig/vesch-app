import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../core/order/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public order = {
    additional: '0',
  };
  private _orderSubs: Subscription;
  public orderItems;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this._orderSubs = this.orderService.orderData.subscribe(
      (orderItems) => {
        this.orderItems = orderItems;
      }
    );
  }

  ngOnDestroy() {
    this._orderSubs.unsubscribe();
  }
}
