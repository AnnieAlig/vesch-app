import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoyaltyRouting } from './loyalty.routing';
import { LoyaltyComponent } from './loyalty.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoyaltyComponent],
  imports: [
    CommonModule,
    LoyaltyRouting,
    SharedModule,
  ]
})
export class LoyaltyModule { }
