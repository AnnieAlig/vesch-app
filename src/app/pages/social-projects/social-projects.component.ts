import { Component, OnInit } from '@angular/core';
import { SocialProjectsService } from '.././../core/services/social-projects.service';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-social-projects',
  templateUrl: './social-projects.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './social-projects.component.scss']
})
export class SocialProjectsComponent implements OnInit {
  public projects: any;
  public itemsPerPage: number;
  public page: any;

  constructor(
    private socialProjectsService: SocialProjectsService,
    private metaService: MetaService,
    public config: ConfigService
  ) { }

  ngOnInit() {
    this.socialProjectsService.getProjects().subscribe(
      (data: any) => {
        if (data.meta) {
          this.metaService.set(data.meta);
        }
        if (data.projects) {
          this.projects = data.projects;
        }
      }
    );
    this.itemsPerPage = window.innerWidth >= 1024 ? 6 : 3;
  }

}
