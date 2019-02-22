import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CallbackComponent } from './callback/callback.component';
import { VideoComponent } from './video/video.component';
// import { SuccessModalComponent } from './modals/success-modal/success-modal.component';

export const components = [
  BreadcrumbsComponent,
  CallbackComponent,
  VideoComponent,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    TextMaskModule,
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
