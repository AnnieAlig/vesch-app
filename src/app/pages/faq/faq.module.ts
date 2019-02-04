import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRouting } from './faq.routing';
import { FaqComponent } from './faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRouting
  ]
})
export class FaqModule { }
