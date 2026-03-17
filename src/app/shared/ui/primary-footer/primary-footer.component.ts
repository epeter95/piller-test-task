import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-primary-footer',
  imports: [
    MatToolbar
  ],
  templateUrl: './primary-footer.component.html',
  styleUrl: './primary-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryFooterComponent {
}
