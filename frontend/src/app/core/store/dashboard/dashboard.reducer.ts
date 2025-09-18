import { Clip } from '@app/core/models/clip.model';
import { DisplayType } from '@app/core/models/dashboard.model';
import { createReducer, on } from '@ngrx/store';
import { getAllClipsFailure, getAllClipsSuccess, setDisplayType } from './dashboard.actions';

export interface DashboardState {
  clips: Clip[] | undefined;
  displayType: DisplayType | undefined;
  sortType: undefined;
  error: Error | undefined;
}

const initialState: DashboardState = {
  clips: undefined,
  displayType: 'all',
  sortType: undefined,
  error: undefined,
};

export const dashboardReducer = createReducer(
  initialState,
  on(setDisplayType, (state, { displayType }) => {
    return {
      ...state,
      displayType,
    };
  }),
  on(getAllClipsSuccess, (state, { clips }) => {
    return {
      ...state,
      clips,
      error: undefined,
    };
  }),
  on(getAllClipsFailure, (state) => {
    return {
      ...state,
      clips: undefined,
      error: new Error('FAILED TO GET ALL CLIPS FROM API'),
    };
  })
);
