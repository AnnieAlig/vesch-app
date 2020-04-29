import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../core/services/news.service';
import { WOW } from 'wowjs/dist/wow.min';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

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
    private metaService: MetaService,
    public config: ConfigService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.newsService.getPage(id).subscribe( (data) => {
      this.news = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }
      // this.WOW = new WOW();
      // this.WOW.init();
    });
  }

}
