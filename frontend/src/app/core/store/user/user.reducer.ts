import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';

export interface UserState {
  currentUser: User | undefined;
  lastLogin: Date | undefined;
  error: Error | undefined;
}

const initialState: Readonly<UserState> = {
  currentUser: undefined,
  lastLogin: undefined,
  error: undefined,
};

export const userReducer = createReducer(initialState);
