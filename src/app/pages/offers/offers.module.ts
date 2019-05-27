import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { OffersRouting } from './offers.routing';
import { OffersComponent } from './offers.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { BlacktieComponent } from './blacktie/blacktie.component';
import { MobileEcoComponent } from './mobile-eco/mobile-eco.component';

@NgModule({
  declarations: [OffersComponent, OfferPageComponent, BlacktieComponent, MobileEcoComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgSelectModule,
    OffersRouting,
    FormsModule
  ]
})
export class OffersModule { }
