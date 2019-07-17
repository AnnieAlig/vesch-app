import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialProjectsRouting } from './social-projects.routing';
import { SocialProjectsComponent } from './social-projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [SocialProjectsComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    SocialProjectsRouting
  ]
})
export class SocialProjectsModule { }
