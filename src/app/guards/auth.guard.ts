import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): 
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  |boolean 
  | UrlTree {
    if (localStorage.getItem('email')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
