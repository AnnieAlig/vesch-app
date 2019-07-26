import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { NgxPaginationModule } from 'ngx-pagination';

import { СompanyRouting } from './company.routing';
import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    СompanyRouting,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class CompanyModule { }
