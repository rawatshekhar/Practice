import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService} from './services/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { PostsComponent } from './posts/posts.component';
import { SheetComponent } from './sheet/sheet.component';
import { FormBuilder } from '@angular/forms';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  title = 'SERVICES';
  dataf: any;
  dataf1: any;
  dataArray:any;
 

  getPost: any;
  fileUploadForm: any;
  imagePreview: string;
  croppedImage1: string;
  imageChangedEvent: any;
  url:any;
  urls=[];
  userInputUrl:string="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  base64Image: string;

  constructor(
    private userService: UserService,
    private dialog : MatDialog,
    private fb: FormBuilder,
  ){

    this.fileUploadForm= this.fb.group({
      image:[],

    })

  }
  ngOnInit(): void {
    // let imageUrl ="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    }

getimage(imageUrl){
  this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
    console.log(base64data);
    this.base64Image = "data:image/jpg;base64," + base64data;
  });
}

    getBase64ImageFromURL(url: string) {
      return Observable.create((observer: Observer<string>) => {
        let img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = url;
        if (!img.complete) {
          img.onload = () => {
            observer.next(this.getBase64Image(img));
            observer.complete();
          };
          img.onerror = err => {
            observer.error(err);
            console.log("Image Not Found");
            
          };
        } else {
          observer.next(this.getBase64Image(img));
          observer.complete();
        }
      });
    }
  
    getBase64Image(img: HTMLImageElement) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

  onSelectFile(event) {
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.imageChangedEvent = this.url;
        console.log(this.url,"Image Details");    
      }
    }
    console.log(event,"Event Data");    
    // this.userInputUrl="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    console.log("imageChangedEvent",this.imageChangedEvent);    
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log("event ImageCropped",event);    
    this.croppedImage1 = event.base64;
}


imageLoaded(image: HTMLImageElement) {
  // show cropper
}
cropperReady() {
  // cropper ready
}
loadImageFailed() {
  // show message
}



  onSelectFiles(event) {
    if (event.target.files) {
      for(let i=0;i<File.length;i++){
        const reader= new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload=(events:any)=>{
          this.urls.push(events.target.result);
        }
      }
      
    }

  }
    // onSelectFile(event){
    //   if(event.target.files){
    //     const reader = new FileReader();
    //     reader.onload=()=>{
    //      this.imagePreview= reader.result as string; 
    //     };
    //     reader.onerror = (error) => {
    //       console.log('Error: ', error);
    //     };
    //   }
    // }

    // imageChangedEvent: any = '';
    // croppedImage: any = '';
    // url: string = 'https://images.cdn.circlesix.co/image/2/1200/700/5/uploads/media/2018-12/19/80973e9288c78c93/p90331894_highres_mini-john-cooper-wor.jpg';
    
    // fileChangeEvent(event: any): void {
    //     this.imageChangedEvent = event;
    // }
    
    // imageURL(url){
    //   this.imageURL=url;
    // }

    // imageCropped(event: ImageCroppedEvent) {
    //     this.croppedImage = event.base64;
    // }
    // imageLoaded(image: HTMLImageElement) {
    //     show cropper
    // }
    // cropperReady() {
    //     cropper ready
    // }
    // loadImageFailed() {
    //     show message
    // }


    // displayedColumns: string[] = ['name', 'id', 'username', 'email'];
    // dataSource = this.dataArray;
    // openPost(post){
    //   const dialogRef = this.dialog.open(PostsComponent,{
    //     width:'50rem',
    //     minHeight:'50vh',
    //     data: post
    //   })
    // }
  //   openEditor(){
  //     const dialogRef = this.dialog.open(SheetComponent,{
  //       width:'50rem',
  //       minHeight:'50vh',
      
  //     })
  //   }
  // getUserData(){
  //   this.userService.getUser().subscribe((result)=>{
  //     console.log("result userData",result);
  //     this.dataf=result;
  //   },(error)=>{
  //     console.log("error userData",error);
  
  //   })
  // }
  // getPostData(){
  //   this.userService.getPost().subscribe((result)=>{
  //     console.log("result",result);
  //     this.dataf1=result;
  //   },(error)=>{
  //     console.log("error",error);
  
  //   })
  // }

  // onDelete(id:number){
  //   if(confirm('Are you sure to delete?')){
  //     console.log("DATA To be DELETED",id);
  //     this.userService.deleteData(id).subscribe((result)=>{
  //       console.log("DATA To be ",result);
  //     },(error)=>{
  //       console.log("DELETED DATA ERROR",error);
      
  //     })
  //   }
  //   console.log("USER ID DELETED",id);

  // }
}
