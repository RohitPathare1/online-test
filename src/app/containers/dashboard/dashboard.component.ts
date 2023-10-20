import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isCollapsed: boolean = false;
  user: any = { name: '' }
  selectedFile: File | undefined;
  imageChangedEvent: ImageCroppedEvent | undefined
  croppedImage: string | null | undefined = 'assets/profile.jpg'
  tests: any = [];
  constructor(config: NgbModalConfig, private modalService: NgbModal, private toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.user.name = 'Rohit Pathare'
    this.tests = [{
      name: 'Java Programming',
      details: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      name: 'Angular Framework',
      details: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    }]
  }
  open(content: any) {
    this.modalService.open(content);
  }
  selectFile(imageCropper: any): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.png, .jpg, .jpeg';

    fileInput.addEventListener('change', (event: any) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        this.imageChangedEvent = event;
        const tempFile = target.files[0];
        const allowedExtensions = ['png', 'jpg', 'jpeg'];
        const fileExtension = tempFile.name.toLowerCase().slice(((tempFile.name.lastIndexOf(".") - 1) >>> 0) + 2);
        console.log(target.files[0]);
        // const tempFile = target.files[0];
        if (allowedExtensions.includes(fileExtension)) {
          this.selectedFile = new File([tempFile], 'Profile', {
            type: tempFile.type,
          });
          this.open(imageCropper)
        } else {
          this.toastr.error('Please choose only pdf, png, jpg, jpeg format', `${'Invalid Format  ' + fileExtension}`);
          return;
        }

      }
    });
    fileInput.click();
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event)
    this.croppedImage = event.objectUrl;
  }
  close() {
    this.croppedImage = 'assets/profile.jpg'
    this.modalService.dismissAll('Cancel click');
  }
  saveProfile() {
    this.modalService.dismissAll('Cancel click');
  }
  addTest(addNewTest: any) {
    this.modalService.open(addNewTest);

  }
  saveTest() {

  }
}
