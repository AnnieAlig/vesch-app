import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CallbackService} from '../../core/services/callback.service';
import { WOW } from 'wowjs/dist/wow.min';
import {DialogService} from 'ng2-bootstrap-modal';
import { SuccessModalComponent } from '../../shared/modals/success-modal/success-modal.component';
import { ConfigService } from 'src/app/core/services/config.service';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit, AfterViewInit {

  @Input() mode: any;
  @Input() referrer: any;
  public data: any;

  @ViewChild('form') callbackForm: HTMLFormElement;
  public callback = {
    name: '',
    phone: ''
  };
  public phoneMask = ['+', '3', '8', '(', '0', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public validated: boolean;
  public showError = false;

  constructor(
    private dialogService: DialogService,
    private callbackService: CallbackService,
    private config: ConfigService
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    // new WOW().init();
  }

  onSubmit(form: NgForm) {
    this.validated = true;
    if (form.valid) {
      this.showError = false;
      const formData = JSON.stringify(form.value);
      this.callbackService.send(formData)
        .subscribe( (result) => {
          const options = {
            closeByClickingOutside: true,
            backdropColor: 'rgba(0,0,0,.64)',
          };
          const disposable = this.dialogService.addDialog(SuccessModalComponent,
            {title: 'Ваша заявка успешно отправлена!', subtitle: 'Мы свяжемся с вами очень скоро'}, options)
            .subscribe((modal) => {
              this.callbackForm.reset();
              this.validated = false;
            });
      });
    } else {
      this.showError = true;
    }
  }
}
