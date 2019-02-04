import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsRouting } from './points.routing';
import { PointsComponent } from './points.component';

@NgModule({
  declarations: [PointsComponent],
  imports: [
    CommonModule,
    PointsRouting
  ]
})
export class PointsModule { }
