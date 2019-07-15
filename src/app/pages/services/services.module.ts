import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRouting } from './services.routing';
import { SharedModule } from '../../shared/shared.module';
import { ServicePageComponent } from './service-page/service-page.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRouting,
    SharedModule
  ],
  declarations: [
    ServicesComponent,
    ServicePageComponent
  ]
})
export class ServicesModule { }
