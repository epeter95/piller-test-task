import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly _loadingCount = signal(0);

  readonly isLoading = signal(false);

  show() {
    this._loadingCount.update(count => count + 1);
    this.isLoading.set(true);
  }

  hide() {
    this._loadingCount.update(count => Math.max(0, count - 1));

    if (this._loadingCount() === 0) {
      this.isLoading.set(false);
    }
  }
}
