import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { modeOrder } from './callback.data';
import { modeSubscribe } from './callback.data';
import { CallbackService} from '../../core/services/callback.service';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit, AfterViewInit {

  @Input() mode: any;
  public data: any;
  private modeOrder: any;
  private modeSubscribe: any;

  @ViewChild('form') callbackForm: HTMLFormElement;
  public callback = {
    name: '',
    phone: ''
  };
  public phoneMask = ['+', '3', '8', '(', '0', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public validated: boolean;

  constructor(
    private callbackService: CallbackService
  ) {
    this.modeOrder = modeOrder;
    this.modeSubscribe = modeSubscribe;
  }

  ngOnInit() {
    this.handleData();
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  handleData() {
    if (this.mode === 'subscribe') {
      this.data = this.modeSubscribe;
    } else {
      this.data = this.modeOrder;
    }
  }

  onSubmit(form: NgForm) {
    this.validated = true;
    if (form.valid) {
      const formData = JSON.stringify(form.value);
      this.callbackService.send(formData)
        .subscribe( (result) => {
          this.callbackForm.reset();
          this.validated = false;
      });
    }
  }
}
