import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return this.userService.user() ? this.router.createUrlTree(['dashboard']) : true;
  }
}
