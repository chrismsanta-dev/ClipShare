import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User } from 'firebase/auth';
import { Store } from '@ngrx/store';
import { loginUser, logoutUser } from '../store/user/user.actions';
import { userMapper } from '../models/user.model';
import { auth } from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;

  constructor(private store: Store) {
    onAuthStateChanged(auth, (user) => {
      console.log('here');
      if (user) {
        this.currentUser = user;
        this.store.dispatch(loginUser({ user: userMapper(user) }));
      } else {
        this.currentUser = null;
        this.store.dispatch(logoutUser());
      }
    });
  }

  public async registerUser(email: string, username: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user) throw new Error('Failed to register user: no user returned');
      await updateProfile(user, { displayName: username });

      return user;
    } catch (error: any) {
      if (error.code) throw error;

      throw new Error(error.message || 'Unknown error during registration');
    }
  }

  public async loginUser(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user) throw new Error('Failed to login user: no user found');

      return user;
    } catch (error: any) {
      if (error.code) throw error;

      throw new Error(error.message || 'Unknown error during login');
    }
  }

  public async logoutUser(): Promise<void> {
    try {
      await signOut(auth);
      this.currentUser = null;
      this.store.dispatch(logoutUser());
    } catch (error: any) {
      if (error.code) throw error;

      throw new Error(error.message || 'Uknown error during logout');
    }
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }
}
