import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<Readonly<UserState>>('user');

export const getCurrentUser = createSelector(selectUserState, (state) => state.currentUser);
export const getLastLogin = createSelector(selectUserState, (state) => state.lastLogin);
