import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { PointsRouting } from './points.routing';
import { PointsComponent } from './points.component';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [PointsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PointsRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApKI_HxX5zMJAhG6XXQSdwClRCUk7QYzI'
    }),
    AgmDirectionModule
  ]
})
export class PointsModule { }
