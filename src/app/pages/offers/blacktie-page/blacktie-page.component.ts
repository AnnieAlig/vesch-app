import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../core/services/home.service';
import { WOW } from 'wowjs/dist/wow.min';
import { OffersService } from '../../../core/services/offers.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-blacktie-page',
  templateUrl: './blacktie-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    '../offers.component.scss',
    './blacktie-page.component.scss']
})
export class BlacktiePageComponent implements OnInit {
  public blackTie_items: any;
  public WOW: WOW;
  public offers: any;

  constructor(
    private homeService: HomeService,
    private offersService: OffersService
  ) { }

  ngOnInit() {
    this.homeService.getBlackTie().subscribe(
      (blackTie) => {
        this.blackTie_items = blackTie;
        // this.WOW = new WOW();
        // this.WOW.init();
      }
    );
    this.offersService.getSomeOffers().subscribe(
      (offers: any) => {
        this.offers = offers;
      }
    );
  }

}
