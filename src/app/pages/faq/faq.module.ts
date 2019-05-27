import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRouting } from './faq.routing';
import { FaqComponent } from './faq.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRouting,
    SharedModule,
  ]
})
export class FaqModule { }
