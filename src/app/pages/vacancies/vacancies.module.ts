import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

import { VacanciesRouting } from './vacancies.routing';
import { VacanciesComponent } from './vacancies.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';
import { SendResumeComponent } from './send-resume/send-resume.component';

@NgModule({
  declarations: [VacanciesComponent, VacancyPageComponent, SendResumeComponent],
  imports: [
    CommonModule,
    SharedModule,
    VacanciesRouting,
    FormsModule,
    NgSelectModule
  ]
})
export class VacanciesModule { }
