import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialProjectsService } from '.././../../core/services/social-projects.service';
import { WOW } from 'wowjs/dist/wow.min';

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
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.socialProjectsService.getPage(id).subscribe( (project) => {
      this.project = project;
      // this.WOW = new WOW();
      // this.WOW.init();
    });
  }

}
