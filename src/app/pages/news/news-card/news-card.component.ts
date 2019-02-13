import { Component, OnInit, Input, HostListener } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 1023;
  }

}
