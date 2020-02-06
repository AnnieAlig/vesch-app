import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { trigger, style, animate, transition } from '@angular/animations';
import * as _ from 'underscore';

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
  @Input() map: any;

  public mode: string;
  public mapList: any;
  public filterOption = 'all';

  constructor(
    protected homeService: HomeService
  ) { }

  ngOnInit() {
    this.setMode('map');
    this.filter(this.filterOption);
  }

  setMode(mode: string) {
    this.mode = mode;
    return false;
  }

  filter(option: string) {
    if (this.map) {
      this.filterOption = option;
      if (option === 'all') {
        this.mapList = this.map.maplist;
      } else {
        this.mapList = _.filter(this.map.maplist, (item: any) => {
          return item.type === option;
        });
      }
    }
  }
}
