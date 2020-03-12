import { Component, OnInit } from '@angular/core';
import { PromosService } from '../../core/services/promos.service';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './promos.component.scss']
})
export class PromosComponent implements OnInit {
  public promos: any;
  public itemsPerPage: number;

  constructor(
    private promosService: PromosService,
    private metaService: MetaService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.promosService.getPromos().subscribe(
      (data: any) => {
        if (data) {
          if (data.meta) {
            this.metaService.set(data.meta);
          }
          if (data.promos) {
            this.promos = data.promos;
          }
        }
      }
    );
    this.itemsPerPage = window.innerWidth >= 1024 ? 6 : 3;
  }

}
