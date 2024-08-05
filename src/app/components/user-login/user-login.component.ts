import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { PopupMessageComponent } from '../popup-message/popup-message.component';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, PopupMessageComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  constructor(
    private userService: UserService, 
    private router: Router
  ) {}

  loginForm = new FormGroup({
    email : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
  });

  get loginFormControl() {
    return this.loginForm.controls;
  }

  gotoRegister(){
    this.router.navigate(['/add-user'])
  }

  public message: string = '';
  public messageType: 'success' | 'error' = 'success';
  login(){
    const {email, password} = this.loginForm.value
    this.userService.getUserByEmail(email as string).subscribe(
      response=> {
        if(response.length > 0 && response[0].password === password){
          localStorage.setItem('email', email as string);
          this.message = 'Login successfull';
          this.messageType = 'success';
          setTimeout(()=> {
            window.location.href = window.location.href
          }, 1000);
        }else{
          this.message = 'Username or password is wrong';
          this.messageType = 'error';
        }
      },
      error=> {
        console.log(error);
        this.message = 'Login failed';
        this.messageType = 'error';
      }
    )
  }

  // login(){
  //   const userLogin = {
  //     email: JSON.parse(JSON.stringify(this.loginForm.value.userName)),
  //     password: JSON.parse(JSON.stringify(this.loginForm.value.password)),
  //   };

  //   this.userService.login(userLogin).subscribe(() => {
  //     console.log(userLogin);
      
  //     this.router.navigate(['/dashboard']);
  //   });
  // }

}
