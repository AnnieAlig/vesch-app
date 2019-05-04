import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromosComponent } from './promos.component';
import { PromoPageComponent } from './promo-page/promo-page.component';

const routes: Routes = [
  {
    path: '',
    component: PromosComponent,
    // data: {
    //   meta: {
    //     title: meta.pages.faq.title,
    //     description: meta.pages.faq.description,
    //   }
    // },
  },
  {
  path: ':id',
  component: PromoPageComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromosRouting { }
