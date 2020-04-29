import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromosService } from '../../../core/services/promos.service';
import { WOW } from 'wowjs/dist/wow.min';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

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
    private metaService: MetaService,
    public config: ConfigService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.promosService.getPage(id).subscribe( (data) => {
      this.promo = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }
      // this.WOW = new WOW();
      // this.WOW.init();
    });
  }

}
