import { Component, Input, OnInit } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { UserService } from '../../../services/user.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-post-list',
  standalone: true,
  imports: [UserListComponent, CommonModule, RouterLink],
  templateUrl: './user-post-list.component.html',
  styleUrl: './user-post-list.component.css'
})
export class UserPostListComponent implements OnInit{

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ){}

  

  public listOfPosts: any[]  = [];
  public listOfcomments: any[]  = [];
  public userId!: number;
  public comments = false;
  public postId!: number;
  
  ngOnInit(): void {
    // this.getPosts();
    this.activatedRoute.params.subscribe((params)=> {
      if(params['id']){
        this.getPostsByUserId(params['id']);
        this.userId = params['id'];
      }
    })
  }

  // getPosts(){
  //   this.userService.getPosts().subscribe(response=> {
  //     this.listOfPosts = response[0];      
  //   })
  // }
  
  getPostsByUserId(userId: number){
    this.userService.getPostByUserId(userId).subscribe(response=> {
      this.listOfPosts = [response];
    },
    error=> {
      console.log(error); 
    }
  )    
  }

  getCommentsPostId(postId: number){
    this.userService.getCommentsPostById(postId).subscribe(response=> {
      this.listOfcomments = [response];
      console.log(this.listOfcomments);
      
      this.comments = !this.comments;
      if(!this.comments) this.postId = 0; else this.postId = postId;
    })
  }

  // openAccordion(id: number){
  //   this.comments = !this.comments;
  //   if(!this.comments) this.postId = ; else this.postId = id;
  // }

}
