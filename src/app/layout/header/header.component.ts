import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mobile: boolean;
  public config: any;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.mobile = window.innerWidth < 1200;
  }
  constructor(
    private router: Router,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.mobile = window.innerWidth < 1200;
    this.router.events.subscribe((evt) => {
      if ((evt instanceof NavigationEnd)) {
        window.scrollTo(0, 0);
      }
    });
    this.configService.getConfig().subscribe((config) => {
      this.config = config;
      this.configService.store(config);
    });
  }

}
