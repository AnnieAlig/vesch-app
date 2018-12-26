import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mobile: boolean;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.mobile = window.innerWidth < 1280;
  }
  constructor() { }

  ngOnInit() {
    this.mobile = window.innerWidth < 1280;
  }

}
