import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
