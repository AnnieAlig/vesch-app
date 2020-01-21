import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  public config: any;
  public today: Date;

  private subs = new Subscription;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.today = new Date();
    this.subs.add(this.configService.configData.subscribe((config) => {
      this.config = config;
    }));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
