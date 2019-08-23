import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as sharedModule from '../../shared/shared.module';

import { NgxPaginationModule } from 'ngx-pagination';

import { NewsRouting } from './news.routing';
import { NewsComponent } from './news.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsPageComponent } from './news-page/news-page.component';

@NgModule({
  declarations: [NewsComponent, NewsCardComponent, NewsPageComponent],
  imports: [
    CommonModule,
    sharedModule.SharedModule,
    NewsRouting,
    NgxPaginationModule,
  ]
})
export class NewsModule { }
