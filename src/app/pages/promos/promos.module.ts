import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromosRouting } from './promos.routing';
import { PromosComponent } from './promos.component';
import { PromoCardComponent } from './promo-card/promo-card.component';

import { SharedModule } from '../../shared/shared.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { PromoPageComponent } from './promo-page/promo-page.component';

@NgModule({
  declarations: [PromosComponent, PromoCardComponent, PromoPageComponent],
  imports: [
    CommonModule,
    PromosRouting,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class PromosModule { }
