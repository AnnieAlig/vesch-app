import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';
import { ConfigService } from 'src/app/core/services/config.service';

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
    public config: ConfigService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // new WOW().init();
  }

  getParentPage(level?) {
    if (level === 2) {
      this.router.navigate(['../../'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
