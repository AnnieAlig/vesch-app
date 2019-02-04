import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowWeWorkRoutingModule } from './how-we-work.routing';
import { HowWeWorkComponent } from './how-we-work.component';

@NgModule({
  declarations: [HowWeWorkComponent],
  imports: [
    CommonModule,
    HowWeWorkRoutingModule
  ]
})
export class HowWeWorkModule { }
