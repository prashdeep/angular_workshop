import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router,
    private authenticationService:AuthenticationService
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('Came inside the can active method of auth guard....')
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser){
      return true;
    }
    //navigate to login screen
    this.router.navigate(['/login']);
  }
}
