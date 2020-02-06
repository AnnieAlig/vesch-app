import { Component, OnInit, HostListener, ElementRef, ViewChild, Input, Inject } from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';
import { SearchModalComponent } from '../../../shared/modals/search-modal/search-modal.component';
import { Location } from '@angular/common';

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
  public language: string;
  public currentUrl: string;

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
    private location: Location
  ) { }

  ngOnInit() {
    this.currentUrl = this.location.path(true);
    this.language = this.location['_baseHref'].replace(/\//g, '');
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

  changeLanguage(lang: string) {
    this.language = lang;
    this.currentUrl = this.location.path(true);
  }
}
