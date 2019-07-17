import { Component, OnInit } from '@angular/core';
import { SocialProjectsService } from '.././../core/services/social-projects.service';

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
  constructor(
    private socialProjectsService: SocialProjectsService,
  ) { }

  ngOnInit() {
    this.socialProjectsService.getProjects().subscribe(
      (projects: any) => {
        this.projects = projects;
      }
    );
    this.itemsPerPage = window.innerWidth >= 1024 ? 6 : 3;
  }

}
