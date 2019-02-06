import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CallbackComponent } from './callback/callback.component';

export const components = [
  BreadcrumbsComponent,
  CallbackComponent
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