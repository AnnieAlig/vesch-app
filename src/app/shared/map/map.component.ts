import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { trigger, style, animate, transition } from '@angular/animations';
import * as _ from 'underscore';
import { Observable } from 'rxjs';

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
  @ViewChild('map', {read: ElementRef}) private mapElement: ElementRef;
  @ViewChildren('marker', {read: ElementRef}) private marker: QueryList<any>;

  public mapConfig = {
    latitude: 46.477088,
    longitude: 30.731194,
    zoomLevel: 11,
    iconUrl: 'assets/img/icons/ic_marker.png',
    chosenIconUrl: 'assets/img/icons/ic_marker_chosen.png'
  };
  public mode: string;
  public mapList: any;
  public filterOption = 'all';
  public previousInfoWindow: any;
  public selectedMarkerId: any;
  public direction = {
    destination: {},
    origin: {}
  };

  constructor(
    protected homeService: HomeService
  ) { }

  ngOnInit() {
    this.setMode('map');
    this.filter(this.filterOption);
    this.getPosition().subscribe((pos) => {
      if (pos && pos.coords) {
        this.direction.origin = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
      }
     });
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

  showOnMap(location, index) {
    if (this.map) {
      this.setMode('map');
      if (this.mapElement) {
        this.mapElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      this.selectMarker(index);
    }
  }

  selectMarker(markerId, infowindow?) {
    this.selectedMarkerId = markerId;
    this.direction.destination = {};
    if (this.previousInfoWindow) {
        this.previousInfoWindow.close();
    }
    this.previousInfoWindow = infowindow;
  }

  getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: Position) => {
        observer.next(pos);
      });
    });
  }

  getDirection(marker) {
    this.setMode('map');
    this.direction.destination = {
      lat: marker.latitude,
      lng: marker.longitude
    };
  }
}
