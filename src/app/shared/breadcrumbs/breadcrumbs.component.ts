import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, AfterViewInit {
  @Input() currentPage: string;
  @Input() parentPage: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  getParentPage() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
