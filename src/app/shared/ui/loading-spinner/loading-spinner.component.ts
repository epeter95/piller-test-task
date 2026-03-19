import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent {
  loadingService = inject(LoadingService);
  isLoading = this.loadingService.isLoading;
}
