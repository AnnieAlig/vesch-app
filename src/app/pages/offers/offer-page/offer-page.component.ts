import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from '../../../core/services/offers.service';
import { OrderService } from '../../../core/order/order.service';
import { WOW } from 'wowjs/dist/wow.min';
import * as juxtapose from '../../../../assets/scripts/juxtapose.js';
import * as _ from 'underscore';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

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
  public activeSectionIndexes: any = [];
  public filteredItems: any = [];
  public filterSections: any = [];
  public sorting: string;
  public isMobile: boolean;

  public sliderConfig = {
    activeSlide: 1,
    sliderInterval: null,
    prevSlide: null,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offersService: OffersService,
    private orderService: OrderService,
    private metaService: MetaService,
    public config: ConfigService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.offersService.getPage(id).subscribe( (data) => {
      this.offer = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }
      // this.WOW = new WOW();
      // this.WOW.init();
      this.createSlider();
      this.filterSection();
      _.each(this.offer.filter_sections, (section: any, index: number) => {
        this.filterSections.push({ value: index, text: section.name});
      });
    });

    this.isMobile = window.innerWidth < 768;
  }

  createSlider() {
    this.offer.header_img.forEach((item, index) => {
      const slider = new juxtapose.JXSlider(`#before_after_${index}`,
      [
        {src: this.offer.header_img[index].after_img},
        {src: this.offer.header_img[index].before_img},
      ],
      {
          animate: true,
          showLabels: true,
          showCredits: true,
          startingPosition: '75%',
          makeResponsive: true
      });
    });
  }

  changeSlide(index?) {
    this.sliderConfig.prevSlide = this.sliderConfig.activeSlide;
    if (index) {
      this.sliderConfig.activeSlide = index;
    } else {
      (this.sliderConfig.activeSlide < this.offer.header_img.length) ?
        this.sliderConfig.activeSlide += 1 : this.sliderConfig.activeSlide = 1;
    }
  }

  filterSection(index?: number, mode?: string) {
    this.filteredItems = [];
    if (mode === 'mobile') {
      this.activeSectionIndexes = [];
    }
    if (typeof index !== 'undefined') {
      if (_.contains(this.activeSectionIndexes, index)) {
        const key = this.activeSectionIndexes.indexOf(index);
        this.activeSectionIndexes.splice(key, 1);
      } else {
        this.activeSectionIndexes.push(index);
      }
    }
    _.each(this.offer.filter_sections, (section: any, i: number) => {
      if (typeof index === 'undefined' || (index >= 0 && _.contains(this.activeSectionIndexes, i)) || !this.activeSectionIndexes.length) {
        this.sort(_.union(this.filteredItems, section.items));
      }
    });
  }

  sectionIsActive(index) {
    return _.contains(this.activeSectionIndexes, index);
  }

  sort(items, event?) {
    this.sorting = event ? event : this.sorting;
    if (this.sorting === 'ACD') {
      this.filteredItems =  _.sortBy(items, (item: any) => item.price);
    } else if (this.sorting === 'DESC') {
      this.filteredItems =  _.sortBy(items, (item: any) => -item.price);
    } else {
      this.filteredItems =  _.sortBy(items, (item: any) => item.name);
    }
  }

  search(data) {
    this.activeSectionIndexes = [];
    if (data && data.length > 3) {
      let result = [];
      _.each(this.offer.filter_sections, (section: any) => {
        const filteredItems = _.filter(section.items, (item: any) => {
          return item.name.toLowerCase().includes(data);
        });
        if (filteredItems && filteredItems.length) {
          result = _.union(result, filteredItems);
        }
      });
      this.filteredItems = result;
    } else if (!data) {
      this.filterSection();
    }
  }

  addToCart(item) {
    this.orderService.add(item);
  }

  navigateTo(url) {
    this.router.navigate([url]);
  }
}
