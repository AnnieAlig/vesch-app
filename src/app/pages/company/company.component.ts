import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../core/services/company.service';
import * as _ from 'underscore';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

declare var lightGallery: any;

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './company.component.scss']
})
export class CompanyComponent implements OnInit {
  public data: any;
  public itemsPerPage: number;

  constructor(
    private metaService: MetaService,
    private companyService: CompanyService,
    private config: ConfigService
    ) { }

  ngOnInit() {
    this.companyService.getData().subscribe((data) => {
      this.data = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }
    });
    this.itemsPerPage = window.innerWidth >= 1024 ? 4 : 2;
  }

  startGallery(index: number, images: any) {
    const imageSet = [];
    _.each(images, (image) => {
      imageSet.push({'src': image});
    });
    lightGallery(document.getElementById(`gallery-${index}`), {
        dynamic: true,
        dynamicEl: imageSet
    });
  }
}
