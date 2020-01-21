import { Component, OnInit, HostListener, Renderer2, Input } from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';
import { SearchModalComponent } from '../../../shared/modals/search-modal/search-modal.component';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss',
              '../header.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  @Input() config: any;

  public isCollapsed: boolean;
  public searchInput;
  public defaultLanguage: string;
  @HostListener('document:keydown', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        this.search();
      }
    }

  constructor(
    private dialogService: DialogService,
    private renderer: Renderer2,
    private $localStorage: LocalStorageService
    ) { }

  ngOnInit() {
    this.defaultLanguage = this.$localStorage.retrieve('default-language');
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

  changeDefaultLanguage(lang: string) {
    this.defaultLanguage = lang;
    this.$localStorage.store('default-language', lang);
    window.location.reload();
  }
}
