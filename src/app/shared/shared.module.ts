import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ShareModule } from '@ngx-share/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CallbackComponent } from './callback/callback.component';
import { VideoComponent } from './video/video.component';
import { SliderComponent } from './slider/slider.component';
import { SocialShareComponent } from './social-share/social-share.component';
// import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
export const components = [
  BreadcrumbsComponent,
  CallbackComponent,
  VideoComponent,
  SliderComponent,
  SocialShareComponent,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    TextMaskModule,
    ShareModule
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  entryComponents: [
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
