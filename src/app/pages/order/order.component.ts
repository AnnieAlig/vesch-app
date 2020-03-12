import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../core/order/order.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { first } from 'rxjs/operators';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public order = {
    items: []
  };

  private _subs = new Subscription();

  constructor(
    private orderService: OrderService,
    private router: Router,
    private $localStorage: LocalStorageService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    const customer = this.$localStorage.retrieve('customer-id');
    if (customer) {
      this.orderService.getOrder(customer).pipe(first()).subscribe(
        (orderItems) => {
          this.order.items = orderItems;
          this._subs.add(this.orderService.orderData.subscribe((data) => {
            this.order.items = data;
          }));
        },
      (err) => {
        this.orderService.clear();
      });
    }
  }

  submitOrder() {
    this.orderService.submit(this.order.items).subscribe( (result) => {
      if (result && result.id) {
        this.router.navigate(['/checkout'], {queryParams: {order: result.id}});
      }
    });
  }

  ngOnDestroy() {
    if (this._subs) {
      this._subs.unsubscribe();
    }
  }

}
