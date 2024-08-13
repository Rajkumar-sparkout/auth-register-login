import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { UserPostListComponent } from '../user-post-list/user-post-list.component';
import { log } from 'util';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  public userList: any[] = [];
  public startingIndex: number = 1;
  public listOfUserPosts: any[] | number = [];

  constructor(
    private userService: UserService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(response=> {
      this.userList = response;
    },
    error=> {
      console.log(error); 
    }
  )
  }

}
