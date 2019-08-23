import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../../shared/map/map.component';
import { HomeService } from '../../core/services/home.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent extends MapComponent implements OnInit {

  constructor(
    protected homeService: HomeService
  ) {
    super(homeService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
