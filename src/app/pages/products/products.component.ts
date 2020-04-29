import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { MetaService } from 'src/app/core/services/meta.service';
import { OrderService } from 'src/app/core/order/order.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: any;

  constructor(
    private productsService: ProductsService,
    private orderService: OrderService,
    private metaService: MetaService,
    public config: ConfigService
  ) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      (data: any) => {
        if (data) {
          if (data.meta) {
            this.metaService.set(data.meta);
          }
          if (data.products) {
            this.products = data.products;
          }
        }
      }
    );
  }

  addToCart(item) {
    this.orderService.add(item);
  }
}
