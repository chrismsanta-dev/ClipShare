import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.reducer';

export const selectDashboardState = createFeatureSelector<Readonly<DashboardState>>('dashboard');

export const getClips = createSelector(selectDashboardState, (state) => state.clips);
export const getDisplayType = createSelector(selectDashboardState, (state) => state.displayType);
export const getSortType = createSelector(selectDashboardState, (state) => state.sortType);
