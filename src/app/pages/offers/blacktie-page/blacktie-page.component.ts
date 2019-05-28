import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../core/services/home.service';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-blacktie-page',
  templateUrl: './blacktie-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './blacktie-page.component.scss']
})
export class BlacktiePageComponent implements OnInit {
  public blackTie_items: any;
  public WOW: WOW;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getBlackTie().subscribe(
      (blackTie) => {
        this.blackTie_items = blackTie;
        this.WOW.init();
      }
    );
    this.WOW = new WOW();
  }

}
