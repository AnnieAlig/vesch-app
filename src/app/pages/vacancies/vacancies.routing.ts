import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacanciesComponent } from './vacancies.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';

const routes: Routes = [
  {
    path: '',
    component: VacanciesComponent,
    // data: {
    //   meta: {
    //     title: meta.pages.faq.title,
    //     description: meta.pages.faq.description,
    //   }
    // },
  },
  {
  path: ':id',
  component: VacancyPageComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacanciesRouting { }
