import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

export const components = [
  BreadcrumbsComponent
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule
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
