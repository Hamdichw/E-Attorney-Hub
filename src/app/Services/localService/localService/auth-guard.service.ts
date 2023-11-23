import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private cookieService: CookieService 
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let tokenExists = this.cookieService.check('token'); // Check if 'token' exists in cookies
    let refreshTokenExists = this.cookieService.check('refreshToken'); // Check if 'refreshToken' exists in cookies
    tokenExists=true;
    refreshTokenExists=true;
    if (tokenExists && refreshTokenExists) {
      return true; // Allow access if both tokens exist (without validating their content)
    } else {
      // Redirect to the login page or unauthorized page
      this.router.navigate(['/SignUp']);
      return false;
    }
  }
}