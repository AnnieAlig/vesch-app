import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../../core/services/offers.service';
import { WOW } from 'wowjs/dist/wow.min';
import { HomeService } from '../../../core/services/home.service';
import { MetaService } from 'src/app/core/services/meta.service';

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
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.offersService.getPage('mobile-eco').subscribe( (data) => {
      if (data) {
        if (data && data.meta) {
          this.metaService.set(data.meta);
        }
        this.offer = data;
        this.WOW = new WOW();
        this.WOW.init();
      }
    });
  }

}
