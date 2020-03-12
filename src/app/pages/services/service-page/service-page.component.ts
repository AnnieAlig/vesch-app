import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../../core/services/services.service';
import { WOW } from 'wowjs/dist/wow.min';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

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
    private servicesService: ServicesService,
    private metaService: MetaService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicesService.getPage(id).subscribe( (data) => {
      this.service = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }
      // this.WOW = new WOW();
      // this.WOW.init();
    });
  }

}
