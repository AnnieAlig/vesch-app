import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../../shared/map/map.component';
import { HomeService } from '../../core/services/home.service';
import { MetaService } from 'src/app/core/services/meta.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent extends MapComponent implements OnInit {
  constructor(
    protected homeService: HomeService,
    private metaService: MetaService
  ) {
    super(homeService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.homeService.getMapList().subscribe(
      (data: any) => {
        if (data && data.meta) {
          this.metaService.set(data.meta);
        }
        this.map = data;
        this.filter(this.filterOption);
      }
    );
  }

}
