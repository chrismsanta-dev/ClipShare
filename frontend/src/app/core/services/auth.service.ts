import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DUMMY_USERS } from '../../../../public/data/DUMMY_USERS';
import { UserActions } from '../store/user/user.actions';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store, private router: Router) {}

  public loginUser(email: string): void {
    const users = DUMMY_USERS;
    const user = users.find((u) => u.email === email);
    if (user) this.store.dispatch(UserActions.setCurrentUser({ user }));
    this.router.navigate(['dashboard']);
  }
}
