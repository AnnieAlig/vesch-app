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
  public steps;

  constructor(
    private offersService: OffersService,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.offersService.getPage('mobile-eco').subscribe( (offer) => {
      this.offer = offer;
      this.WOW = new WOW();
      this.WOW.init();
    });
    this.homeService.getSteps().subscribe(
      (steps) => {
        this.steps = steps;
        this.WOW.sync();
      }
    );
  }

}
