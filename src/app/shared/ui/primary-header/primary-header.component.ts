import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-primary-header',
  imports: [
    MatToolbar
  ],
  templateUrl: './primary-header.component.html',
  styleUrl: './primary-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryHeaderComponent {
}
