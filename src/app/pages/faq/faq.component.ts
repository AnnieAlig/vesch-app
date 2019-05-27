import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../core/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: [
    '../../../assets/styles/_pages.scss',
    './faq.component.scss']
})
export class FaqComponent implements OnInit {
  public faq: any;
  public activeQuestion: number;

  constructor(
    private faqService: FaqService
  ) { }

  ngOnInit() {
    this.faqService.getQuestions().subscribe(
      (questions) => {
        this.faq = questions;
      }
    );
  }

  chooseQuestion(index) {
    this.activeQuestion !== index ? this.activeQuestion = index : this.activeQuestion = null;
  }
}
