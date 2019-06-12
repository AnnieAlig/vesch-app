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
  @Input() subParent: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  getParentPage(level?) {
    console.log('this.activeRoute.parent', this.route.parent)
    if (level === 2) {
      this.router.navigate(['../../'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
