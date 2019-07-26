import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialProjectsComponent} from './social-projects.component';

const routes: Routes = [
  {
    path: '',
    component: SocialProjectsComponent,
    // data: {
    //   meta: {
    //     title: meta.pages.faq.title,
    //     description: meta.pages.faq.description,
    //   }
    // },
  },
  {
  path: ':id',
  component: SocialProjectsComponent
 },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialProjectsRouting { }
