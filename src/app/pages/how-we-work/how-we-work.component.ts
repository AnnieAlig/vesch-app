import { Component, OnInit } from '@angular/core';
import { HowWeWorkService } from 'src/app/core/services/how-we-work.service';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './how-we-work.component.scss']
})
export class HowWeWorkComponent implements OnInit {
  public data: any;

  constructor(
    private howWeWorkServise: HowWeWorkService
  ) { }

  ngOnInit() {
    this.howWeWorkServise.getData().subscribe((data) => {
      this.data = data;
    });
  }

}
