import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../core/services/checkout.service';
import { NgForm } from '@angular/forms';

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
    private checkoutService: CheckoutService
  ) { }

  ngOnInit() {
    this.checkoutService.getCart().subscribe(
      (cart: any) => {
        this.cart = cart;
      }
    );
  }

}
