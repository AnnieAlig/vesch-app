import { Component, OnInit, Input, HostListener } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 1023;
  }

}
