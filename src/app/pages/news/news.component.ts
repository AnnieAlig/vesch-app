import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { MetaService } from 'src/app/core/services/meta.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './news.component.scss',
  ]
})
export class NewsComponent implements OnInit {
  public news: any;
  public itemsPerPage: number;
  public page: any;
  constructor(
    private newsService: NewsService,
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(
      (data: any) => {
        if (data) {
          if (data.meta) {
            this.metaService.set(data.meta);
          }
          if (data.news) {
            this.news = data.news;
          }
        }
      }
    );
    this.itemsPerPage = window.innerWidth >= 1024 ? 6 : 3;
  }

}
