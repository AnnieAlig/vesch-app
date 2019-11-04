import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServicesService } from '../../core/services/services.service';
import { WOW } from 'wowjs/dist/wow.min';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  public services: any;

  constructor(
    private servicesService: ServicesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.servicesService.getServices().subscribe(
      (services: any) => {
        this.services = services;
      }
    );
  }

  ngAfterViewInit() {
    // new WOW().init();
  }

  navigateTo(url) {
    this.router.navigate([url]);
  }
}
