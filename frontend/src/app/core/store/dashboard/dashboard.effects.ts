import { inject, Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getAllClips, getAllClipsFailure, getAllClipsSuccess } from './dashboard.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Clip } from '@app/core/models/clip.model';

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions);

  constructor(private readonly apiService: ApiService) {}

  loadClips$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllClips),
      exhaustMap(() =>
        this.apiService.get<Clip[]>('clips').pipe(
          map((clips: Clip[]) => getAllClipsSuccess({ clips })),
          catchError(() => of(getAllClipsFailure()))
        )
      )
    );
  });
}
