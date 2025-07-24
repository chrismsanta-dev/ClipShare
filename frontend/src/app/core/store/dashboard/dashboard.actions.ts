import { createActionGroup, props } from '@ngrx/store';
import { DisplayType } from '../../models/dashboard.model';
import { Clip } from '../../models/clip.model';

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    'Set Display Type': props<{ displayType: DisplayType }>(),
    'Set Clips': props<{ clips: Clip[] }>(),
  },
});

export const DashboardApiActions = createActionGroup({
  source: 'Dashboard API',
  events: {},
});
