import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.css'
})
export class UploadImageComponent implements OnInit {

  constructor(
    // private fireStorage: AngularFireStorage
  ){}

  ngOnInit(): void {
    
  }

  async onFileChange(event: any){
    const file = event.target.files[0];
    if(file){
      // const path = `yt/${file.name}`;
      // const uploadTask = await this.fireStorage.upload(path, file);
      // const url = await uploadTask.ref.getDownloadURL();
      // console.log(url);
    }
  }

}
