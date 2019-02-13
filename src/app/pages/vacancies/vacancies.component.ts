import { Component, OnInit, HostListener } from '@angular/core';
import { VacanciesService } from '../../core/services/vacancies.service';
import { NgForm } from '@angular/forms';
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
  public resume = {
    name: '',
    email: '',
    file: ''
  };
  public isMobile: boolean;
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.isMobile = window.innerWidth < 768;
  }

  constructor(
    private vacanciesService: VacanciesService,
  ) { }

  ngOnInit() {
    this.vacanciesService.getVacancies().subscribe(
    (vacancies: any) => {
      this.vacancies = vacancies;
    });

    this.isMobile = window.innerWidth < 768;
  }

}
