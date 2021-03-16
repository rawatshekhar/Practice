import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }
    getUser(){
    console.log("API ID CALLED");
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getPost(){
    console.log("POSTS CALLED");
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  
  
  // getComments(){
  //   console.log("COMMENTS ArE HERE");
  //   return this.http.get('https://jsonplaceholder.typicode.com/comments') ;
  // }
  getComments(postid){
    console.log("COMMENTS ArE HERE");
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postid);
  }

  deleteData(id){
    console.log("DELETE API CALLED");
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+ id);

  }
}
