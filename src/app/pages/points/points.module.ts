import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { PointsRouting } from './points.routing';
import { PointsComponent } from './points.component';

@NgModule({
  declarations: [PointsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PointsRouting
  ]
})
export class PointsModule { }
