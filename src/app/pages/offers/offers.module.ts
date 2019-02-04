import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRouting } from './offers.routing';
import { OffersComponent } from './offers.component';

@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule,
    OffersRouting
  ]
})
export class OffersModule { }
