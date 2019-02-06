import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { OffersRouting } from './offers.routing';
import { OffersComponent } from './offers.component';

@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule,
    SharedModule,
    OffersRouting,
    FormsModule
  ]
})
export class OffersModule { }
