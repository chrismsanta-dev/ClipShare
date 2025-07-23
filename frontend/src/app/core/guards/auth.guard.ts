import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  public canActivate(): boolean | UrlTree {
    return true;
  }
}
