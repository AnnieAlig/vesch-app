import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { СompanyRouting } from './company.routing';
import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    СompanyRouting
  ]
})
export class CompanyModule { }
