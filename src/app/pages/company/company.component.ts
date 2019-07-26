import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../core/services/company.service';

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
    private companyService: CompanyService
    ) { }

  ngOnInit() {
    this.companyService.getData().subscribe((data) => {
      this.data = data;
    });
    this.itemsPerPage = window.innerWidth >= 1024 ? 4 : 2;
  }

}
