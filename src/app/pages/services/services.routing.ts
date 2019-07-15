import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServicePageComponent } from './service-page/service-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    // data: {
    //   meta: {
    //     title: meta.pages.faq.title,
    //     description: meta.pages.faq.description,
    //   }
    // },
  },
  {
  path: ':id',
  component: ServicePageComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ServicesRouting { }
