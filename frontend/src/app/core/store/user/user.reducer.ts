import { AuthUser } from '@app/core/models/user.model';
import { createReducer, on } from '@ngrx/store';
import { loginUser, logoutUser } from './user.actions';

export interface UserState {
  user: AuthUser | undefined;
  lastLogin: Date | undefined;
  error: Error | undefined;
}

const initialState: Readonly<UserState> = {
  user: undefined,
  lastLogin: undefined,
  error: undefined,
};

export const userReducer = createReducer(
  initialState,
  on(loginUser, (state, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(logoutUser, (state) => {
    return {
      ...state,
      user: undefined,
    };
  })
);
