import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlowbiteService } from './services/flowbite.service';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'register-form';

  constructor(
    private flowbiteService: FlowbiteService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    // initFlowbite();
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });

    if(localStorage.getItem('email')){
      this.router.navigate(['/dashboard'])
    }else{
    this.router.navigate(['/user-login'])
    }
  }
}
