import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DUMMY_CLIPS } from '../../../../public/data/DUMMY_CLIPS';
import { Clip } from '../models/clip.model';

@Injectable({ providedIn: 'root' })
export class ClipService {
  constructor(private store: Store) {}

  public getPersonalClips(userId: string): Clip[] {
    const clips = DUMMY_CLIPS.filter((clip) => clip.userId === userId);
    return clips;
  }

  public getAllClips(): Clip[] {
    const clips = DUMMY_CLIPS;
    return clips;
  }
}
