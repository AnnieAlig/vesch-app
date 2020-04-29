import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OffersService } from '../../../core/services/offers.service';
import { OrderService, OrderItem } from '../../../core/order/order.service';
import { WOW } from 'wowjs/dist/wow.min';
import * as _ from 'underscore';
import { Subscription } from 'rxjs';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-offer-item-page',
  templateUrl: './offer-item-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './offer-item-page.component.scss']
})
export class OfferItemPageComponent implements OnInit, OnDestroy {
  public WOW: WOW;
  public offerItem: any;
  private _orderSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offersService: OffersService,
    private orderService: OrderService,
    private metaService: MetaService,
    public config: ConfigService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('itemId');
    const parentId = +this.route.snapshot.paramMap.get('id');
    this.offersService.getItemPage(id, parentId).subscribe( (data) => {
      this.offerItem = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }

      this._orderSubs = this.orderService.orderData.subscribe(
        (orderItems) => {
          const currentItemInCart: any = _.findWhere(orderItems, {id: this.offerItem.id});
          if (currentItemInCart) {
            this.offerItem.quantity = currentItemInCart.quantity;
          } else {
            this.offerItem.quantity = 1;
          }
        }
      );
      // this.WOW = new WOW();
      // this.WOW.init();
    });


  }

  ngOnDestroy() {
    if (this._orderSubs) {
      this._orderSubs.unsubscribe();
    }
  }

  changeQuantity(mode) {
    if (mode === 'add') {
      this.offerItem.quantity += 1;
    } else if (mode === 'remove') {
      if (this.offerItem.quantity > 1) {
        this.offerItem.quantity -= 1;
      }
    }
  }

  addToCart(item) {
    const itemToCart = new OrderItem;
    _.mapObject(itemToCart, (val, key) => {
      return itemToCart[key] = item[key];
    });
    this.orderService.add(itemToCart, itemToCart.quantity);
  }

  navigateTo(url) {
    this.router.navigate([url]);
  }
  navigateToParent() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
