import { Component, input } from '@angular/core';
import { Clip } from '@app/core/models/clip.model';

@Component({
  selector: 'app-clip-card',
  imports: [],
  templateUrl: './clip-card.component.html',
  styleUrl: './clip-card.component.css',
})
export class ClipCardComponent {
  public clip = input.required<Clip>();
}
