import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../../core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slider;
  public activeSlide: number;
  private sliderInterval: any;

  public benefits;
  public steps;
  public services;
  public blackTie_items;

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

  createSlider() {
    this.homeService.getSlides().subscribe(
      (slides) => {
        this.slider = slides.slider;
        this.activeSlide = 1;
      }
    );
  }
  changeSlide() {
    (this.activeSlide < this.slider.length) ? this.activeSlide += 1 : this.activeSlide = 1;
  }
  getSliderImage(mode: string) {
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
