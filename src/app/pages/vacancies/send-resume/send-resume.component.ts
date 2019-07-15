import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import {DialogService} from 'ng2-bootstrap-modal';
import { SuccessModalComponent } from '../../../shared/modals/success-modal/success-modal.component';

@Component({
  selector: 'app-send-resume',
  templateUrl: './send-resume.component.html',
  styleUrls: [
    '../../../../assets/styles/_pages.scss',
    './send-resume.component.scss'
  ]
})
export class SendResumeComponent implements OnInit {

  public resume = {
    name: '',
    email: '',
    file: ''
  };
  public fileName: string;
  showError = false;

  constructor(
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
  }

  onfileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length === 1) {
        const file: File = fileList[0];
        this.fileName = file.name;
        if (this.fileName.length > 20) {
          this.fileName = this._truncateString(this.fileName, 20);
        }
    //     // let formData:FormData = new FormData();
    //     // formData.append('uploadFile', file, file.name);
    //     // let headers = new Headers();
    }
  }

  onSubmit() {
    console.log('resume', this.resume);
    const options = {
      closeByClickingOutside: true,
      backdropColor: 'rgba(0,0,0,.64)'
    };
    const disposable = this.dialogService.addDialog(SuccessModalComponent, {title: 'Ваше резюме успешно отправлено!'}, options)
      .subscribe((result) => {

      });
  }

  checkFile() {
    this.showError = !this.resume.file;
  }

  removeFile() {
    this.resume.file = '';
    this.fileName = '';
  }

  private _truncateString(name, len) {
    const ext = name.substring(name.lastIndexOf('.') + 1, name.length);
    let filename = name.replace('.' + ext, '');
    filename = filename.substr(0, len) + (name.length > len ? '[...]' : '');
    return filename + '.' + ext;
  }
}
