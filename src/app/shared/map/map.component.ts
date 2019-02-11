import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [
    trigger(
      'fadeInOut', [
        transition(':enter', [
          style({opacity: 0}),
          animate('250ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class MapComponent implements OnInit {

  public mode: string;
  public mapList: any;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.setMode('map');
    this.createMapList();
  }

  setMode(mode: string) {
    this.mode = mode;
    return false;
  }

  createMapList() {
    this.homeService.getMapList().subscribe(
      (maplist: any) => {
        this.mapList = maplist;
      }
    );
  }
}
