import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../../core/services/offers.service';
import { WOW } from 'wowjs/dist/wow.min';
import { HomeService } from '../../../core/services/home.service';

@Component({
  selector: 'app-mobile-eco',
  templateUrl: './mobile-eco.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './mobile-eco.component.scss']
})
export class MobileEcoComponent implements OnInit {
  public offer: any;
  public WOW: WOW;

  constructor(
    private offersService: OffersService,
  ) { }

  ngOnInit() {
    this.offersService.getPage('mobile-eco').subscribe( (offer) => {
      if (offer) {
        this.offer = offer;
        this.WOW = new WOW();
        this.WOW.init();
      }
    });
  }

}
