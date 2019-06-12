import { Component } from '@angular/core';
import { OrderService } from './core/order/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vesch-app';

  constructor(
    private orderService: OrderService
  ) {
    this.orderService.getFromStorage();
  }

}
