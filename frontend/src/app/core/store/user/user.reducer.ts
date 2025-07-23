import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserActions } from './user.actions';
import { DUMMY_USERS } from '../../../../../public/data/DUMMY_USERS';

export interface UserState {
  currentUser: User | undefined;
  lastLogin: Date | undefined;
}

const initialState: Readonly<UserState> = {
  currentUser: DUMMY_USERS[0],
  lastLogin: undefined,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.setCurrentUser, (state, { user }) => {
    return {
      ...state,
      currentUser: user,
    };
  })
);
