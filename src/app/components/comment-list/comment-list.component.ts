import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent implements OnInit{

  postId!: number;
  public listOfComments: any[] = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=> {
      if(params['id']){
        this.getPostCommentsByID(params['id']);
        this.postId = params['id'];
      }
    })
  }

  getPostCommentsByID(postId: number){
    this.userService.getCommentsPostById(postId).subscribe(response=> {
      this.listOfComments = [response];
    })
  }

}
