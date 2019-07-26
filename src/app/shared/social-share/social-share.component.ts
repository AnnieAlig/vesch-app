import { Component, OnInit } from '@angular/core';
import { ShareService } from '@ngx-share/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {

  constructor(
    public share: ShareService
  ) { }

  ngOnInit() {
  }

}
