import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialProjectsRouting } from './social-projects.routing';
import { SocialProjectsComponent } from './social-projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectPageComponent } from './project-page/project-page.component';

@NgModule({
  declarations: [SocialProjectsComponent, ProjectCardComponent, ProjectPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    SocialProjectsRouting
  ]
})
export class SocialProjectsModule { }
