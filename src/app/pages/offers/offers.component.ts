import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OffersService } from '../../core/services/offers.service';
import { WOW } from 'wowjs/dist/wow.min';

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
  constructor(
    private offersService: OffersService,
  ) { }

  ngOnInit() {
    this.offersService.getOffers().subscribe(
      (offers: any) => {
        this.offers = offers.offers;
      }
    );
  }

  ngAfterViewInit() {
    new WOW().init();
  }

}
