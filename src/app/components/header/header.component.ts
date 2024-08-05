import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public logoutTab: boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.logoutTab = true
    }else{
      this.logoutTab = false;
    }
  }

  logout(){
    localStorage.removeItem('email');
    window.location.href = window.location.href
    // localStorage.clear();
  }

}
