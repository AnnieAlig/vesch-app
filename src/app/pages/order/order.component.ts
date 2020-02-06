import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../core/order/order.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    items: []
  };
  private _orderSubs: Subscription;
  public orderItems;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this._orderSubs = this.orderService.orderData.subscribe(
      (orderItems) => {
        this.orderItems = orderItems;
      }
    );
  }

  submitOrder() {
    this.order.items = this.orderItems;
    this.orderService.submit(this.order).subscribe( (result) => {
      if (result && result.status === 'success') {
        this.router.navigate(['/checkout'], {queryParams: {order: result.order}});
      }
    });
  }

  ngOnDestroy() {
    this._orderSubs.unsubscribe();
  }
}
