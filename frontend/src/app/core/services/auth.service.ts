import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store, private router: Router) {}

  public loginUser(email: string): void {
    const users: User[] = [];
    const user = users.find((u) => u.email === email);
    this.router.navigate(['dashboard']);
  }
}
