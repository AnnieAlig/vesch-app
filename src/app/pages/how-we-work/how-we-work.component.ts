import { Component, OnInit } from '@angular/core';
import { HowWeWorkService } from 'src/app/core/services/how-we-work.service';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

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
    private howWeWorkServise: HowWeWorkService,
    private metaService: MetaService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.howWeWorkServise.getData().subscribe((data) => {
      this.data = data;
        if (data && data.meta) {
          this.metaService.set(data.meta);
        }
    });
  }

}
