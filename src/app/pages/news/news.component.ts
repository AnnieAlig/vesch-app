import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
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
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(
      (news: any) => {
        this.news = news;
      }
    );
  }

}
