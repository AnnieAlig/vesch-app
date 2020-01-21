import { Component, OnInit, HostListener, ElementRef, ViewChild, Input } from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';
import { SearchModalComponent } from '../../../shared/modals/search-modal/search-modal.component';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss',
              '../header.component.scss']
})
export class HeaderDesktopComponent implements OnInit {
  @Input() config: any;
  @ViewChild('dropdown_menu') private dropdown: ElementRef;
  @ViewChild('dropdown_link') private dropdown_link: ElementRef;
  collapsed;
  public defaultLanguage: string;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.collapsed) {
      if (this.dropdown && !this.dropdown.nativeElement.contains(event.target)
        && !this.dropdown_link.nativeElement.contains(event.target)) {
        this.collapsed = !this.collapsed;
      }
    }
  }
  constructor(
    private dialogService: DialogService,
    private $localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.defaultLanguage = this.$localStorage.retrieve('default-language');
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
