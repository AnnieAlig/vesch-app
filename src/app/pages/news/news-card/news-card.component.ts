import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './news-card.component.scss'
  ]
})
export class NewsCardComponent implements OnInit {
  @Input() news_item: any;
  public isMobile: boolean;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.isMobile = window.innerWidth < 1023;
  }
  constructor(
    public config: ConfigService
    ) { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 1023;
  }

}
