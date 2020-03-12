import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../core/services/home.service';
import { ConfigService } from 'src/app/core/services/config.service';
@Component({
  selector: 'app-blacktie',
  templateUrl: './blacktie.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './blacktie.component.scss'
  ]
})
export class BlacktieComponent implements OnInit {
  public blackTie_section;

  constructor(
    private homeService: HomeService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.createBlackTie();
  }

  createBlackTie() {
    this.homeService.getBlackTie().subscribe(
      (blackTie) => {
        this.blackTie_section = blackTie;
      }
    );
  }
}
