import { Component, OnInit, OnDestroy, ComponentRef, HostListener, Renderer2 } from '@angular/core';
import { DialogComponent, DialogService, DialogOptions} from 'ng2-bootstrap-modal';
import { ConfigService } from 'src/app/core/services/config.service';

export interface SearchModel {}

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})

  export class SearchModalComponent extends DialogComponent<SearchModel, boolean>
  implements SearchModel, OnInit, OnDestroy {
    public searchInput;

    @HostListener('document:keydown', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.close();
      }
      if (event.key === 'Enter') {
        this.search();
      }
    }

  constructor(
    dialogService: DialogService,
    private renderer: Renderer2,
    public config: ConfigService
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
  search() {
    if (this.searchInput) {
      console.log('search for: ', this.searchInput);
    }
  }
}
