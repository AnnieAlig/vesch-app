import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../../core/services/services.service';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
  public service: any;
  public WOW: WOW;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicesService.getPage(id).subscribe( (service) => {
      this.service = service;
      this.WOW.init();
    });
    this.WOW = new WOW();
  }

}
