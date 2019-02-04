import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoyaltyRouting } from './loyalty.routing';
import { LoyaltyComponent } from './loyalty.component';

@NgModule({
  declarations: [LoyaltyComponent],
  imports: [
    CommonModule,
    LoyaltyRouting
  ]
})
export class LoyaltyModule { }
