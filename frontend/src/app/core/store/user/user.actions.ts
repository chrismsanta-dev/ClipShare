import { AuthUser } from '@app/core/models/user.model';
import { createAction, props } from '@ngrx/store';

export const loginUser = createAction('[User] Login User', props<{ user: AuthUser }>());
export const logoutUser = createAction('[User] Logout User');
