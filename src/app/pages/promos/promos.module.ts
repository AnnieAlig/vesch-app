import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromosRouting } from './promos.routing';
import { PromosComponent } from './promos.component';

@NgModule({
  declarations: [PromosComponent],
  imports: [
    CommonModule,
    PromosRouting
  ]
})
export class PromosModule { }
