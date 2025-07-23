import { Injectable, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { getCurrentUser } from '../store/user/user.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class UserService {
  public readonly user = signal<User | undefined>(undefined);

  constructor(private store: Store) {
    this.store.select(getCurrentUser).pipe(takeUntilDestroyed()).subscribe(this.user.set);
  }
}
