import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../core/services/checkout.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import {DialogService} from 'ng2-bootstrap-modal';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { OrderService } from 'src/app/core/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public cart: any;
  public checkout = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    delivery: 'Курьером до двери',
    region: 'Киевская область',
    city: 'Киев',
    street: '',
    house: '',
    flat: '',
    floor: ''
  };
  public phoneMask = ['+', '3', '8', '(', '0', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];


  constructor(
    private route: ActivatedRoute,
    private checkoutService: CheckoutService,
    private orderService: OrderService,
    private $localStorage: LocalStorageService,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    const order = this.route.snapshot.queryParams.order;
    this.checkoutService.getCart(order).subscribe(
      (cart: any) => {
        this.cart = cart;
      }
    );
  }

  submitOrder() {
    this.checkoutService.submit(this.cart, this.checkout).subscribe(
      (result) => {
        if (result && result.success) {
          const options = {
            closeByClickingOutside: true,
            backdropColor: 'rgba(0,0,0,.64)'
          };
          this.dialogService.addDialog(SuccessModalComponent, {title: result.success}, options);
          if (this.$localStorage.retrieve('customer-id')) {
            this.$localStorage.clear('customer-id');
          }
          if (this.$localStorage.retrieve('order-data')) {
            this.$localStorage.clear('order-data');
          }
          this.orderService.clear();
        }
      }
    );
  }

}
