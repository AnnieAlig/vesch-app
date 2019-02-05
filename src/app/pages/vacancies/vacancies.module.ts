import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { VacanciesRouting } from './vacancies.routing';
import { VacanciesComponent } from './vacancies.component';

@NgModule({
  declarations: [VacanciesComponent],
  imports: [
    CommonModule,
    SharedModule,
    VacanciesRouting,
    FormsModule
  ]
})
export class VacanciesModule { }
