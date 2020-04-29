import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { OrderService, OrderItem } from 'src/app/core/order/order.service';
import { MetaService } from 'src/app/core/services/meta.service';
import * as _ from 'underscore';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  public productItem: any;
  private _orderSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private orderService: OrderService,
    private metaService: MetaService,
    public config: ConfigService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getPage(id).subscribe( (data) => {
      this.productItem = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }

      this._orderSubs = this.orderService.orderData.subscribe(
        (productItems) => {
          const currentItemInCart: any = _.findWhere(productItems, {id: this.productItem.id});
          if (currentItemInCart) {
            this.productItem.quantity = currentItemInCart.quantity;
          } else {
            this.productItem.quantity = 1;
          }
        }
      );
    });

  }

  ngOnDestroy() {
    if (this._orderSubs) {
      this._orderSubs.unsubscribe();
    }
  }

  changeQuantity(mode) {
    if (mode === 'add') {
      this.productItem.quantity += 1;
    } else if (mode === 'remove') {
      if (this.productItem.quantity > 1) {
        this.productItem.quantity -= 1;
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
