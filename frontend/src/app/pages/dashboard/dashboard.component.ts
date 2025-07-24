import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { getClips, getDisplayType } from '../../core/store/dashboard/dashboard.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DisplayType } from '../../core/models/dashboard.model';
import { DashboardActions } from '../../core/store/dashboard/dashboard.actions';
import { Clip } from '../../core/models/clip.model';
import { ClipCardComponent } from '../../shared/clip-card/clip-card.component';
import { ClipService } from '../../core/services/clip.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [ClipCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  protected displayType = signal<DisplayType | undefined>(undefined);
  protected clips = signal<Clip[] | undefined>(undefined);

  constructor(private store: Store, private clipService: ClipService, private userService: UserService) {
    this.store.select(getDisplayType).pipe(takeUntilDestroyed()).subscribe(this.displayType.set);
    this.store.select(getClips).pipe(takeUntilDestroyed()).subscribe(this.clips.set);
  }

  protected onSelectDisplayType(displayType: DisplayType): void {
    this.store.dispatch(DashboardActions.setDisplayType({ displayType }));
    const clips = displayType === 'all' ? this.clipService.getAllClips() : this.clipService.getPersonalClips(this.userService.user()!.id);
    this.store.dispatch(DashboardActions.setClips({ clips }));
  }
}
