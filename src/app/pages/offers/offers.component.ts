import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { OffersService } from '../../core/services/offers.service';
import { WOW } from 'wowjs/dist/wow.min';
import * as _ from 'underscore';

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
  ) { }

  ngOnInit() {
    this.offersService.getOffers().subscribe(
      (offers: any) => {
        this.offers = offers;
        _.each(this.offers, (offer: any, index: number) => {
          this.offers[index].hidden = true;
        });
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
