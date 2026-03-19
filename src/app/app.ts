import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoadingSpinnerComponent} from './shared/ui/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('form-manager');
}
