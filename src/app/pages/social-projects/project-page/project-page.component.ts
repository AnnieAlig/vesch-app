import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialProjectsService } from '.././../../core/services/social-projects.service';
import { WOW } from 'wowjs/dist/wow.min';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  public project: any;
  public WOW: WOW;

  constructor(
    private route: ActivatedRoute,
    private socialProjectsService: SocialProjectsService,
    private metaService: MetaService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.socialProjectsService.getPage(id).subscribe( (data) => {
      this.project = data;
      if (data && data.meta) {
        this.metaService.set(data.meta);
      }
      // this.WOW = new WOW();
      // this.WOW.init();
    });
  }

}
