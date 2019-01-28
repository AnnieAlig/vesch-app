import { Component, OnInit, AfterViewInit, ChangeDetectorRef,
  ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  public prevSlide: number;

  public benefits;
  public steps;
  public services;
  public blackTie_items;

  @ViewChild('slides') slides: ElementRef;

  constructor(
    private homeService: HomeService,
    private ref: ChangeDetectorRef,
    private _sanitizer: DomSanitizer,
    private renderer: Renderer2
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
          const allSlides = this.slides.nativeElement.querySelectorAll('.slider__slide');
          const sliderPieces = 6;
          let sliderMode: string;
          if (window.innerWidth < 768) {
            sliderMode = 'mobile_img';
          } else if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
            sliderMode = 'tablet_img';
          } else {
            sliderMode = 'desktop_img';
          }

          _.each(allSlides, (slide: any, index: number) => {
              that.clipImage(this.slider[index][sliderMode], sliderPieces, slide, sliderMode).then(dataUrls => {
                _.each(dataUrls, (dataUrl: any) => {
                  that.createSliderPieces(dataUrl, slide);
                });
              });
          });
        }, 0);

      }
    );
  }

  clipImage(imageSrc: string, slicesNumber: number, container: any, mode: string) {
    return new Promise( (resolve, reject) => {
      const img = new Image;
      img.src = imageSrc;
      const dataUrls = [];
      // const height = container.parentNode.clientHeight;
      // const width = container.parentNode.clientWidth;

      img.onload = function(event) {
        const loadedImage: any = event.currentTarget;
        // console.log('loadedImage', loadedImage.width)
        const width = loadedImage.width;
        const height = loadedImage.height;

        const slicePositionsNotEqual = [];
        let slicePositionHelper;
        const sliceWidthNotEqual = [];
        for (let i = 0; i < slicesNumber; i++) {
          if (i === 0) {
            slicePositionHelper = 0;
            sliceWidthNotEqual.push(width / (slicesNumber - 1) / 2);
          } else if ( i === 1 ) {
            slicePositionHelper += width / (slicesNumber - 1) / 2;
            sliceWidthNotEqual.push(width / (slicesNumber - 1));
          } else if (i === slicesNumber - 1) {
            slicePositionHelper += width / (slicesNumber - 1);
            sliceWidthNotEqual.push(width / (slicesNumber - 1) / 2);
          } else {
            slicePositionHelper += width / (slicesNumber - 1);
            sliceWidthNotEqual.push(width / (slicesNumber - 1));
          }
          slicePositionsNotEqual.push(slicePositionHelper);
        }
        // console.log('sliceWidthNotEqual', sliceWidthNotEqual)
        // console.log('slicePositionsNotEqual', slicePositionsNotEqual)

        for (let i = 0; i < slicesNumber; i++) {
          let slicePosition;
          if (mode === 'desktop_img') {
            slicePosition = width / slicesNumber * -i;
          } else {
            slicePosition = slicePositionsNotEqual[i] * -1;
          }
          const canvas = <HTMLCanvasElement> document.createElement('CANVAS');
          canvas.height = height;
          if (mode === 'desktop_img') {
            canvas.width = width / slicesNumber;
          } else {
            canvas.width = sliceWidthNotEqual[i];
          }
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, slicePosition, 0, width, height);
          const dataURL = canvas.toDataURL();
          dataUrls.push(dataURL);
          if (dataUrls.length === slicesNumber) {
            resolve(dataUrls);
          }
        }
      };
    });
  }
  createSliderPieces(dataUrl: string, container: any) {
    const imgElement = this.renderer.createElement('img');
    this.renderer.setProperty(imgElement, 'src', dataUrl);
    this.renderer.setProperty(imgElement, 'src', dataUrl);
    this.renderer.addClass(imgElement, 'slide__slice');
    this.renderer.appendChild(container, imgElement);
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
