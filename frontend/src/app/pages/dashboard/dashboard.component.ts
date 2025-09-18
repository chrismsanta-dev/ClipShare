import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ClipCardComponent } from '@app/shared/clip-card/clip-card.component';
import { Clip } from '@app/core/models/clip.model';
import { DisplayType } from '@app/core/models/dashboard.model';
import { getAllClips, setDisplayType } from '@app/core/store/dashboard/dashboard.actions';
import { getDisplayType, getClips } from '@app/core/store/dashboard/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  imports: [ClipCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  protected displayType = signal<DisplayType | undefined>(undefined);
  protected clips = signal<Clip[] | undefined>(undefined);

  constructor(private store: Store) {
    this.store.select(getDisplayType).pipe(takeUntilDestroyed()).subscribe(this.displayType.set);
    this.store.select(getClips).pipe(takeUntilDestroyed()).subscribe(this.clips.set);
  }

  ngOnInit(): void {
    this.store.dispatch(getAllClips());
  }

  protected onSelectDisplayType(displayType: DisplayType): void {
    this.store.dispatch(setDisplayType({ displayType }));
  }
}
