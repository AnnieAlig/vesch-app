import { Component } from '@angular/core';
import { OrderService } from './core/order/order.service';
import { LocalStorageService } from 'ngx-webstorage';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private orderService: OrderService,
    private $localStorage: LocalStorageService
  ) {
    const customer = this.$localStorage.retrieve('customer-id');
    if (customer) {
      this.orderService.getOrder(customer).pipe(first()).subscribe(
        (order) => {
          this.orderService.set(order);
      },
      (err) => {
        this.orderService.clear();
      });
    }
  }

}
