import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    '../../news/news-card/news-card.component.scss',
    './project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project_item: any;
  public isMobile: boolean;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.isMobile = window.innerWidth < 1023;
  }
  constructor(
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 1023;
  }

}
