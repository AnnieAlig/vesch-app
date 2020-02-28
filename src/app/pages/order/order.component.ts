import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/order/order.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './order.component.scss']
})
export class OrderComponent implements OnInit {

  public order = {
    items: []
  };

  constructor(
    private orderService: OrderService,
    private router: Router,
    private $localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    const customer = this.$localStorage.retrieve('customer-id');
    if (customer) {
      this.orderService.getOrder(customer).pipe(first()).subscribe(
        (orderItems) => {
          this.order.items = orderItems;
        },
      (err) => {
        this.orderService.clear();
      });
    }
  }

  submitOrder() {
    this.orderService.submit(this.order).subscribe( (result) => {
      if (result && result.status === 'success') {
        this.router.navigate(['/checkout'], {queryParams: {order: result.order}});
      }
    });
  }

}
