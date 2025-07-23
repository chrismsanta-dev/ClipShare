import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Set Current User': props<{ user: User }>(),
  },
});

export const UserApiActions = createActionGroup({
  source: 'User API',
  events: {},
});
