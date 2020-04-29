import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacanciesService } from '../../../core/services/vacancies.service';
import { WOW } from 'wowjs/dist/wow.min';
import * as _ from 'underscore';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './vacancy-page.component.scss'
  ]
})
export class VacancyPageComponent implements OnInit {
  public vacancy: any;
  public WOW: WOW;

  constructor(
    private route: ActivatedRoute,
    private vacanciesService: VacanciesService,
    private metaService: MetaService,
    public config: ConfigService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacanciesService.getPage(id).subscribe( (data) => {
      this.vacancy = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }
      // this.WOW = new WOW();
      // this.WOW.init();
    });
  }
}
