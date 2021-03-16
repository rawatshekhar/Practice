import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  dataComments: any ;
  post : any;

  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
      if(data){
        this.post = data;
        console.log("local data post",this.post);
      }
     }

  ngOnInit(): void {
  this.getCommentsData();
  }

  getCommentsData(){
    this.userService.getComments(this.post.id).subscribe((result)=>{
      console.log("Comments result",result);
       this.dataComments = result;
      },(error)=>{
        console.log("COmments error",error);
      
    })
  }
}
