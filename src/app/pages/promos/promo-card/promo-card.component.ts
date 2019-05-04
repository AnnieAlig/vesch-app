import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {
  @Input() promo_item: any;
  public isMobile: boolean;
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.isMobile = window.innerWidth < 1023;
  }
  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 1023;
  }

}
