import { Component, OnInit } from '@angular/core';
import { LoyaltyService } from '../../core/services/loyalty.service';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './loyalty.component.scss']
})
export class LoyaltyComponent implements OnInit {
  public slider: any;
  public loyalty: any;

  constructor(
    private loyaltyService: LoyaltyService,
    private metaService: MetaService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.loyaltyService.getSlides().subscribe(
      (slides) => {
        this.slider = slides;
      }
    );
    this.loyaltyService.getPage().subscribe(
      (data: any) => {
        this.loyalty = data;
        if (data && data.meta) {
          this.metaService.set(data.meta);
        }
      }
    );
  }

}
