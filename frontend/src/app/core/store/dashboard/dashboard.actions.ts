import { Clip } from '@app/core/models/clip.model';
import { DisplayType } from '@app/core/models/dashboard.model';
import { createAction, props } from '@ngrx/store';

export const setDisplayType = createAction('[Dashboard] Set Display Type', props<{ displayType: DisplayType }>());

export const getAllClips = createAction('[Dashboard] Get All Clips');
export const getAllClipsSuccess = createAction('[Dashboard] Get All Clips Success', props<{ clips: Clip[] }>());
export const getAllClipsFailure = createAction('[Dashboard] Get All Clips Failure');

export const getPersonalClips = createAction('[Dashboard] Get Personal Clips');
export const getPersonalClipsSuccess = createAction('[Dashboard] Get Personal Clips Success', props<{ clips: Clip[] }>());
export const getPersonalClipsFailure = createAction('[Dashboard] Get Personal Clips Failure');
