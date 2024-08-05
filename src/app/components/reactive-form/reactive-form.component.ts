import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FomArrayComponent } from '../fom-array/fom-array.component';
import { User } from '../../interface/user';
import { UserService } from '../../services/user.service';
import { log } from 'console';
import { Router } from '@angular/router';
import { PopupMessageComponent } from '../popup-message/popup-message.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, FomArrayComponent, PopupMessageComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  public file: any[] = [];
  public gender: string[] = ["Male", "Female", "Others"];
  public areaOfInterestList: string[] = ["ECE", "EEE", "CSE", "Civil"];
  public courses: string[] = ["ECE", "EEE", "CSE", "IT", "Civil"];
  public color = '';
  public passwordCheck = true;
  public formFieldErrorMessage = false;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
  }

  register = new FormGroup({
    name : new FormControl("", Validators.required),
    email : new FormControl("", [Validators.required, Validators.email]),
    mobileNumber : new FormControl("", [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.required
    ]),
    gender : new FormControl("", Validators.required),
    areaOfInterest : new FormControl("", Validators.required),
    dateOfBirth : new FormControl("", Validators.required),
    course : new FormControl("", Validators.required),
    password : new FormControl("", [
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      Validators.required
    ]),
    confirmPassword : new FormControl("", Validators.required),
    profile : new FormControl("", Validators.required),
  });

  get registerFormControl() {
    return this.register.controls;
  }

  get email() {
    return this.register.get('email');
  }

  get mobileNumber() {
    return this.register.get('mobileNumber');
  }

  get passwordFormField() {
    return this.register.get('password');
  }


  checkConfirmPassword(){
    const password = this.register.value.password as string;
    const confirmPassword = this.register.value.confirmPassword as string;
    if(password.length === confirmPassword.length && 
      password === confirmPassword){
        this.color = 'black';
        this.passwordCheck = true;
    }else{
      this.color = 'red';
      this.passwordCheck = false;
    }
  }

  imageSrc: string | ArrayBuffer | null = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png";
  fileChangeEvent(event: any) {
    if(event.target.files){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(file); 
    }
 }

  public message: string = '';
  public messageType: 'success' | 'error' = 'success';
  onSubmit(){
    if(this.register.valid){
      if(this.passwordCheck){
        const user = {...JSON.parse(JSON.stringify(this.register.value))}
        delete user.confirmPassword

        this.userService.createUser(user as User).subscribe( 
          data=>{
            if(data){
              console.log(data);
              this.message = 'User registration is success';
              this.messageType = 'success';
              setTimeout(()=> {
                this.router.navigate(['/user-login']);
              }, 1000);
            }
          },
          error=> {
            console.log(error);
            this.message = 'Registration failed';
            this.messageType = 'error';
          } 
        )
      }
    } 
  }

  public showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }


}


