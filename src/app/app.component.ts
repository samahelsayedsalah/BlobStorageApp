import { Component } from '@angular/core';
import { BlobStorageService } from 'src/app/Services/blob-storage.service';
import { FormBuilder, FormGroup } from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BlobStorageApp';
  form: FormGroup;
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };
  Images = [];
  
  constructor( private blobStorageService : BlobStorageService,
    private formBuilder: FormBuilder){}

  GetImages()
  {
    debugger;
    this.blobStorageService.GetImages()
    .subscribe((res: any[])=>{
      console.log(res);
      this.Images = res;      
    });
  }

  ngOnInit() {
    debugger;
    this.GetImages();
  }


  url = "";

  onFileChange(event) {
    debugger;
        let fileToUpload = <File>event.target.files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.blobStorageService.UploadImages(formData)
        .subscribe((res: any[])=>{
          this.GetImages()     ;
        });
  }


  DeleteImage(ImageName)
  {
    this.blobStorageService.DeleteImage(ImageName)
    .subscribe((res: any[])=>{
      this.GetImages();
    });
  }

  DownloadImage(ImageName)
  {
    var url = "https://fgtest3.blob.core.windows.net/images/" + ImageName;
    window.open(url, "_blank");
  }

  DeleteAll()
  {
    this.blobStorageService.DeleteAllImage()
    .subscribe((res: any[])=>{
      this.GetImages();
    });
  }


}
