import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../core/services/faq.service';
import { MetaService } from 'src/app/core/services/meta.service';
import { ConfigService } from 'src/app/core/services/config.service';

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
    private faqService: FaqService,
    private metaService: MetaService,
    public config: ConfigService
  ) { }

  ngOnInit() {
    this.faqService.getQuestions().subscribe(
      (data) => {
        this.faq = data.questions;
        if (data && data.meta) {
          this.metaService.set(data.meta);
        }
      }
    );
  }

  chooseQuestion(index) {
    this.activeQuestion !== index ? this.activeQuestion = index : this.activeQuestion = null;
  }
}
