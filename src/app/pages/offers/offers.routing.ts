import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { MobileEcoComponent } from './mobile-eco/mobile-eco.component';
import { BlacktiePageComponent } from './blacktie-page/blacktie-page.component';
import { OfferItemPageComponent } from './offer-item-page/offer-item-page.component';

const routes: Routes = [
  {
    path: '',
    // component: OffersComponent,
    // data: {
    //   meta: {
    //     title: meta.pages.faq.title,
    //     description: meta.pages.faq.description,
    //   }
    // },
    children: [
      {
        path: '',
        component: OffersComponent,
        pathMatch: 'full'
      },
      {
        path: 'mobile-eco-cleaning',
        component: MobileEcoComponent
      },
      {
       path: 'black-tie',
       component: BlacktiePageComponent
      },
      {
      path: ':id',
      component: OfferPageComponent,
     },
     {
      path: ':id/:itemId',
      component: OfferItemPageComponent
     }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRouting { }
