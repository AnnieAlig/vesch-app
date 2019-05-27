import { Component, OnInit, ViewChild, ElementRef, HostListener, ChangeDetectorRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slider: any;
  @Input() mode: string;

  public mobile: boolean;

  public activeSlide = 1;
  private sliderInterval: any;
  public prevSlide: number;

  @ViewChild('slides') slides: ElementRef;
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      const mobile = window.innerWidth < 768;
      if (this.mobile !== mobile) {
        this.mobile = mobile;
      }
  }
  constructor(
    private ref: ChangeDetectorRef,
    private _sanitizer: DomSanitizer,
  ) {
    this.sliderInterval = setInterval(() => {
      this.changeSlide();
      this.ref.markForCheck();
    }, 6000);
  }

  ngOnInit() {
  }
  changeSlide(index?) {
    this.prevSlide = this.activeSlide;
    if (index) {
      this.activeSlide = index;
    } else {
      (this.activeSlide < this.slider.length) ? this.activeSlide += 1 : this.activeSlide = 1;
    }
  }

  getSliderImage(mode: string, index: number) {
    let image: string;
    if (mode === 'mobile') {
      image = 'mobile_img';
    } else if (mode === 'tablet') {
      image = 'tablet_img';
    } else if (mode === 'desktop') {
      image = 'desktop_img';
    }
    return this._sanitizer.bypassSecurityTrustStyle(`url(${this.slider[this.activeSlide - 1][image]})`);
  }
}
