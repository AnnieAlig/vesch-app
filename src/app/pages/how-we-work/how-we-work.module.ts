import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { HowWeWorkRoutingModule } from './how-we-work.routing';
import { HowWeWorkComponent } from './how-we-work.component';

@NgModule({
  declarations: [HowWeWorkComponent],
  imports: [
    CommonModule,
    HowWeWorkRoutingModule,
    SharedModule,
  ]
})
export class HowWeWorkModule { }
