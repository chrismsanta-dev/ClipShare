import { createReducer, on } from '@ngrx/store';
import { DUMMY_CLIPS } from '../../../../../public/data/DUMMY_CLIPS';
import { Clip } from '../../models/clip.model';
import { DisplayType } from '../../models/dashboard.model';
import { DashboardActions } from './dashboard.actions';

export interface DashboardState {
  clips: Clip[] | undefined;
  displayType: DisplayType | undefined;
  sortType: undefined;
}

const initialState: DashboardState = {
  clips: DUMMY_CLIPS,
  displayType: 'all',
  sortType: undefined,
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.setDisplayType, (state, { displayType }) => {
    return {
      ...state,
      displayType,
    };
  })
);
