import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../core/services/news.service';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  public news: any;
  public WOW: WOW;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.newsService.getPage(id).subscribe( (news) => {
      this.news = news;
      // this.WOW = new WOW();
      // this.WOW.init();
    });
  }

}
