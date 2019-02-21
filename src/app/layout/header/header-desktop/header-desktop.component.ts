import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';
import { SearchModalComponent } from '../../../shared/modals/search-modal/search-modal.component';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss',
              '../header.component.scss']
})
export class HeaderDesktopComponent implements OnInit {
  @ViewChild('dropdown_menu') private dropdown: ElementRef;
  @ViewChild('dropdown_link') private dropdown_link: ElementRef;
  private collapsed;

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
  ) { }

  ngOnInit() {
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
