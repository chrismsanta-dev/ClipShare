import { createActionGroup, props } from '@ngrx/store';
import { DisplayType } from '../../models/dashboard.model';

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    'Set Display Type': props<{ displayType: DisplayType }>(),
  },
});

export const DashboardApiActions = createActionGroup({
  source: 'Dashboard API',
  events: {},
});
