import { Component, OnInit, OnDestroy, ComponentRef, HostListener, Renderer2 } from '@angular/core';
import { DialogComponent, DialogService, DialogOptions} from 'ng2-bootstrap-modal';

export interface SuccessModel {
  title: string;
}

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent  extends DialogComponent<SuccessModel, boolean>
implements SuccessModel, OnInit, OnDestroy {

  public title: string;

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  constructor(
    dialogService: DialogService,
    private renderer: Renderer2,
  ) {
    super(dialogService);
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'modal-open');
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.renderer.removeClass(document.body, 'modal-open');
  }

}
