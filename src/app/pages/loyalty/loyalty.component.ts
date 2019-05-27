import { Component, OnInit } from '@angular/core';
import { LoyaltyService } from '../../core/services/loyalty.service';

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
    private loyaltyService: LoyaltyService
  ) { }

  ngOnInit() {
    this.loyaltyService.getSlides().subscribe(
      (slides) => {
        this.slider = slides;
      }
    );
    this.loyaltyService.getPage().subscribe(
      (loyalty: any) => {
        this.loyalty = loyalty;
      }
    );
  }

}
