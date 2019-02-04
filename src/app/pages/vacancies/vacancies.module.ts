import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacanciesRouting } from './vacancies.routing';
import { VacanciesComponent } from './vacancies.component';

@NgModule({
  declarations: [VacanciesComponent],
  imports: [
    CommonModule,
    VacanciesRouting
  ]
})
export class VacanciesModule { }
