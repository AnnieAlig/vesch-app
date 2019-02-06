import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { NgxPaginationModule } from 'ngx-pagination';

import { NewsRouting } from './news.routing';
import { NewsComponent } from './news.component';
import { NewsCardComponent } from './news-card/news-card.component';

@NgModule({
  declarations: [NewsComponent, NewsCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewsRouting,
    NgxPaginationModule,
  ]
})
export class NewsModule { }
