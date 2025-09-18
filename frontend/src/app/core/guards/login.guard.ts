import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return true ? this.router.createUrlTree(['dashboard']) : true;
  }
}
