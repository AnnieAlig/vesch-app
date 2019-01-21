import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../../core/services/home.service';
import html2canvas from 'html2canvas';
import * as _ from 'underscore';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public slider;
  public activeSlide: number;
  private sliderInterval: any;

  public benefits;
  public steps;
  public services;
  public blackTie_items;

  @ViewChild('slides') slides: ElementRef;

  constructor(
    private homeService: HomeService,
    private ref: ChangeDetectorRef,
    private _sanitizer: DomSanitizer,
  ) {
    this.sliderInterval = setInterval(() => {
      this.changeSlide();
      this.ref.markForCheck();
    }, 6000);
  }

  ngOnInit() {
    this.createSlider();
    this.createBenefits();
    this.createSteps();
    this.createServices();
    this.createBlackTie();
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  createSlider() {
    this.homeService.getSlides().subscribe(
      (slides) => {
        this.slider = slides.slider;
        this.activeSlide = 1;

        setTimeout( () => {
          const that = this;
          console.log('slide 1', this.slides.nativeElement.children, this.slides.nativeElement.children.length)
          _.each(this.slides.nativeElement.children, function(slide: any) {
            if (slide.classList.contains('slider__slide')) {
              console.log('slide', slide)
              // that.createSlidesPieces(slide);
            }
          });
        }, 0);

      }
    );
  }
  changeSlide() {
    (this.activeSlide < this.slider.length) ? this.activeSlide += 1 : this.activeSlide = 1;
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
  createSlidesPieces(slide) {
    html2canvas(slide).then(function(canvas) {
      console.log('canvas', canvas);
      // const img = new Image();
      // const imageSource = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      // img.src = imageSource;
      // document.body.appendChild(img);
    });
  }

  createBenefits() {
    this.homeService.getBenefits().subscribe(
      (benefits) => {
        this.benefits = benefits.benefits;
      }
    );
  }

  createSteps() {
    this.homeService.getSteps().subscribe(
      (steps) => {
        this.steps = steps.steps;
      }
    );
  }

  createServices() {
    this.homeService.getServices().subscribe(
      (services) => {
        this.services = services.services;
      }
    );
  }

  createBlackTie() {
    this.homeService.getBlackTie().subscribe(
      (blackTie) => {
        this.blackTie_items = blackTie.blacktie;
      }
    );
  }
}
