import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';
import { SearchModalComponent } from '../../../shared/modals/search-modal/search-modal.component';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss',
              '../header.component.scss']
})
export class HeaderMobileComponent implements OnInit {

  public isCollapsed: boolean;
  public searchInput;
  @HostListener('document:keydown', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        this.search();
      }
    }

  constructor(
    private dialogService: DialogService,
    private renderer: Renderer2
    ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.renderer.addClass(document.body, 'modal-open');
    } else {
      this.renderer.removeClass(document.body, 'modal-open');
    }
    return false;
  }

  search() {
    if (this.searchInput) {
      console.log('search for: ', this.searchInput);
    }
  }
  openSearchDialog() {
    const options = {
      closeByClickingOutside: true,
      backdropColor: 'rgba(0,0,0,.64)'
    };
    const disposable = this.dialogService.addDialog(SearchModalComponent, {}, options)
      .subscribe((result) => {

      });
  }
}
