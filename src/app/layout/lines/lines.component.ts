import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as LineMaker from '../../../assets/scripts/lineMaker.js';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

declare var LineMaker: any;

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit, AfterViewInit {

  private linesSource = new BehaviorSubject<any>([]);
  lines = this.linesSource.asObservable();

  @ViewChild('linesContainer') linesContainer: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setLines(window.innerWidth);
  }

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.setLines(window.innerWidth);
    this.lines.subscribe(lines => {
      this.createLines(lines);
    });
  }

  createLines(lines) {
    const lineMaker = new LineMaker({
      position: 'fixed',
      element: this.linesContainer.nativeElement,
      parent: {element: this.linesContainer.nativeElement, position: 'prepend'},
      lines: lines
    });
    setTimeout(function() {
      lineMaker.animateLinesIn();
    }, 250);
  }

  setLines(width) {
    let lines;
    if (width < 1280) {
      lines = [
        {top: 0, left: '0', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 100, direction: 'TopBottom' }},
        {top: 0, left: 'calc(100% / 4)', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 300, direction: 'TopBottom' }},
        {top: 0, left: 'calc(100% / 4 * 2)', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: 'calc(100% / 4 * 3)', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 200, direction: 'TopBottom' }},
        {top: 0, left: '100%', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
      ];

    } else {
      lines = [
        {top: 0, left: '0', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 100, direction: 'TopBottom' }},
        {top: 0, left: 'calc(100% / 6)', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 300, direction: 'TopBottom' }},
        {top: 0, left: 'calc(100% / 6 * 2)', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: 'calc(100% / 6 * 3)', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 200, direction: 'TopBottom' }},
        {top: 0, left: 'calc(100% / 6 * 4)', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 400, direction: 'TopBottom' }},
        {top: 0, left: 'calc(100% / 6* 5)', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: '100%', width: 1, height: '100vh', color: 'rgba(52, 58, 73,.1)', hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 200, direction: 'TopBottom' }},
      ];
    }
    if (this.linesSource.getValue().length !== lines.length) {
      this.linesSource.next(lines);
    }
  }
}
