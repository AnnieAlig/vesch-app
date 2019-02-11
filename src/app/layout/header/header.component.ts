import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mobile: boolean;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.mobile = window.innerWidth < 1200;
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.mobile = window.innerWidth < 1200;
    this.router.events.subscribe((evt) => {
      if ((evt instanceof NavigationEnd)) {
        window.scrollTo(0, 0);
      }
    });
  }

}
