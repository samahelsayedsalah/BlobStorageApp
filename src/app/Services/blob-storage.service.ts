import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlobStorageService {

  constructor(private http: HttpClient) { }
  
  GetImages()
  {
    return this.http.get("http://localhost:9659/api/BlobStorage/GetImages");
  }

  UploadImages(formData)
  {
    return this.http.post('http://localhost:9659/api/BlobStorage/UploadImage', formData);
  }

  DeleteImage(imageName)
  {
    return this.http.delete('http://localhost:9659/api/BlobStorage/DeleteImage', { params: { imageName: imageName } });
  }

  DeleteAllImage()
  {
    return this.http.delete('http://localhost:9659/api/BlobStorageDeletion/DeleteAllImages');
  }

}
