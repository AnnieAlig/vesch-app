import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../../../core/services/offers.service';
import { WOW } from 'wowjs/dist/wow.min';
import * as juxtapose from '../../../../assets/scripts/juxtapose.js';
import * as _ from 'underscore';

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
  public filterSections: any = [];
  public isMobile: boolean;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth < 768;
}

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
      _.each(this.offer.filter_sections, (section: any, index: number) => {
        this.filterSections.push({ value: index, text: section.name});
      });
    });

    this.WOW = new WOW();
    this.isMobile = window.innerWidth < 768;
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
