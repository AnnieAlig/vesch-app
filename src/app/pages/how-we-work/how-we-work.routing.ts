import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowWeWorkComponent } from './how-we-work.component';

const routes: Routes = [
  {
    path: '',
    component: HowWeWorkComponent,
    // data: {
    //   meta: {
    //     title: meta.pages.faq.title,
    //     description: meta.pages.faq.description,
    //   }
    // },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowWeWorkRoutingModule { }
