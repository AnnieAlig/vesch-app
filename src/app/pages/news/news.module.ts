import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRouting } from './news.routing';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRouting
  ]
})
export class NewsModule { }
