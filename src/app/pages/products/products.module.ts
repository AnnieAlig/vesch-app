import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ProductsRouting } from './products.routing';
import { ProductsComponent } from './products.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [ProductsComponent, ProductPageComponent],
  imports: [
    CommonModule,
    ProductsRouting,
    SharedModule
  ]
})
export class ProductsModule { }
