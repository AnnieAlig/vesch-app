import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../../shared/map/map.component';
import { HomeService } from '../../core/services/home.service';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent extends MapComponent implements OnInit {
  public map: any;
  public mapData: any;

  constructor(
    protected homeService: HomeService,
    private metaService: MetaService,
    public config: ConfigService
  ) {
    super(homeService);
  }

  ngOnInit() {
    // super.ngOnInit();
    this.homeService.getMapList().subscribe(
      (data: any) => {
        if (data && data.meta) {
          this.metaService.set(data.meta);
        }
        this.map = data;
        this.mapData = JSON.parse(JSON.stringify(data));
        this.filter(this.filterOption);
      }
    );
  }

}
