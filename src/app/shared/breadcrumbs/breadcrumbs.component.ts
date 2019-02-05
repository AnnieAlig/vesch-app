import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, AfterViewInit {
  @Input() currentPage: string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new WOW().init();
  }
}
