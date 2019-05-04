import { Component, OnInit } from '@angular/core';
import { PromosService } from '../../core/services/promos.service';

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
  ) { }

  ngOnInit() {
    this.promosService.getPromos().subscribe(
      (promos: any) => {
        this.promos = promos;
      }
    );
    this.itemsPerPage = window.innerWidth >= 1024 ? 6 : 3;
  }

}
