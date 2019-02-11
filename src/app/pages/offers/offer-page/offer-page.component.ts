import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../../../core/services/offers.service';
import { WOW } from 'wowjs/dist/wow.min';
import * as juxtapose from '../../../../assets/scripts/juxtapose.js';

declare var juxtapose: any;

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './offer-page.component.scss'
  ]
})
export class OfferPageComponent implements OnInit {
  public offer: any;
  public WOW: WOW;
  public activeSectionIndex: number;
  public activeSection: any;

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.offersService.getPage(id).subscribe( (offer) => {
      this.offer = offer;
      this.WOW.init();
      this.createSlider();
      this.filterSection(0);
    });

    this.WOW = new WOW();

  }

  createSlider() {
    const slider = new juxtapose.JXSlider('#before_after',
    [
      {src: this.offer.after_img},
      {src: this.offer.before_img},
    ],
    {
        animate: true,
        showLabels: true,
        showCredits: true,
        startingPosition: '75%',
        makeResponsive: true
    });
  }

  filterSection(index: number) {
    this.activeSectionIndex = index;
    this.activeSection = this.offer.filter_sections[index];
    this.WOW.sync();
  }
}
