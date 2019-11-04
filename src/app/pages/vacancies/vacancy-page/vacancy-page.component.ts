import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacanciesService } from '../../../core/services/vacancies.service';
import { WOW } from 'wowjs/dist/wow.min';
import * as _ from 'underscore';

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
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacanciesService.getPage(id).subscribe( (vacancy) => {
      this.vacancy = vacancy;
      // this.WOW = new WOW();
      // this.WOW.init();
    });
  }
}
