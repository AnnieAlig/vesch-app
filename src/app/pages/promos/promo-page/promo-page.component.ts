import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromosService } from '../../../core/services/promos.service';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-promo-page',
  templateUrl: './promo-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './promo-page.component.scss']
})
export class PromoPageComponent implements OnInit {
  public promo: any;
  public WOW: WOW;

  constructor(
    private route: ActivatedRoute,
    private promosService: PromosService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.promosService.getPage(id).subscribe( (promo) => {
      this.promo = promo;
      this.WOW.init();
    });
    this.WOW = new WOW();
  }

}
