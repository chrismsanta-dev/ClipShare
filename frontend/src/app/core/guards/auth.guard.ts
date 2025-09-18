import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return true ? true : this.router.createUrlTree(['/login']);
  }
}
