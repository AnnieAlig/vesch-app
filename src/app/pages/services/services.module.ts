import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRouting } from './services.routing';

@NgModule({
  imports: [
    CommonModule,
    ServicesRouting
  ],
  declarations: [
    ServicesComponent
  ]
})
export class ServicesModule { }
