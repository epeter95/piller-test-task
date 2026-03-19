import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormList} from '../models/form.model';
import {delay, map, of, tap} from 'rxjs';
import {LoadingService} from '../../../shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  http = inject(HttpClient);
  loadingService = inject(LoadingService);

  getForms() {
    return this.http.get<FormList>('mocks/forms.json');
  }

  getForm(id: string) {
    return this.http.get<FormList>('mocks/forms.json').pipe(
      map(forms => forms.list.find(form => form.id === id))
    );
  }

  submitForm(data: { [key: string]: number | string | null }) {
    this.loadingService.show();
    return of(true).pipe(
      delay(1500),
      tap(() => {
        this.loadingService.hide();
      })
    );
  }
}
