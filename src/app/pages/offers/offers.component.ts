import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { OffersService } from '../../core/services/offers.service';
import { WOW } from 'wowjs/dist/wow.min';
import * as _ from 'underscore';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './offers.component.scss'
  ]
})
export class OffersComponent implements OnInit, AfterViewInit {
  public offers: any;
  public isMobile: boolean;
  public hidden: any;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.isMobile = window.innerWidth < 768;
  }
  constructor(
    private offersService: OffersService,
    private router: Router,
    private metaService: MetaService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.offersService.getOffers().subscribe(
      (data: any) => {
        if (data) {
          if (data.meta) {
            this.metaService.set(data.meta);
          }
          if (data.offers) {
            this.offers = data.offers;
            _.each(this.offers, (offer: any, index: number) => {
              this.offers[index].hidden = true;
            });
          }
        }
      }
    );
    this.isMobile = window.innerWidth < 768;
  }

  ngAfterViewInit() {
    // new WOW().init();
  }

  navigateTo(url) {
    this.router.navigate([url]);
  }

}
