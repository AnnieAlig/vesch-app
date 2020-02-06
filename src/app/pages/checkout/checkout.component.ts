import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../core/services/checkout.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

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
    private $localStorage: LocalStorageService
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
        if (this.$localStorage.retrieve('customer-id')) {
          this.$localStorage.clear('customer-id');
        }
        if (this.$localStorage.retrieve('order-data')) {
          this.$localStorage.clear('order-data');
        }
      }
    );
  }

}
