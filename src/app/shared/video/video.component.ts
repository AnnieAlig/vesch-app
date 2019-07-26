import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() page: string;
  @Input() source: string;
  @Input() poster: string;

  @ViewChild('video') private video: ElementRef;
  @ViewChild('play_btn') private play_btn: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  playVideo(play) {
    const video = this.video.nativeElement;
    if (play) {
      video.play();
      video.setAttribute('controls', '');
    } else {
      video.pause();
      video.removeAttribute('controls');
    }
  }
}
