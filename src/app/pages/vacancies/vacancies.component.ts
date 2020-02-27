import { Component, OnInit, HostListener } from '@angular/core';
import { VacanciesService } from '../../core/services/vacancies.service';
import { Router } from '@angular/router';
import { MetaService } from 'src/app/core/services/meta.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './vacancies.component.scss',
]
})
export class VacanciesComponent implements OnInit {
  public vacancies: any;
  public filteredVacancies: any;
  public isMobile: boolean;
  public cityList = [];
  public city = '';
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.isMobile = window.innerWidth < 768;
  }

  constructor(
    private vacanciesService: VacanciesService,
    private router: Router,
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.vacanciesService.getVacancies().subscribe(
    (data: any) => {
      this.vacancies = data;
      this.filteredVacancies = data.items;
      this.cityList = this.setCityFilter(data.items);
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }
    });

    this.isMobile = window.innerWidth < 768;
  }

  setCityFilter(data) {
    const cities = [];
    _.each(data, (item: any) => {
      if (item && item.city && !_.contains(cities, item.city)) {
        cities.push(item.city);
      }
    });
    return cities;
  }

  search() {
    if (this.city) {
      this.filteredVacancies = _.filter(this.vacancies.items, (item: any) => {
        return item.city.toLowerCase() === this.city.toLowerCase();
      });
    } else {
      this.filteredVacancies = this.vacancies.items;
    }
  }

  navigateTo(url) {
    this.router.navigate([url]);
  }
}
