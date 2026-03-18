import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormList} from '../models/form.model';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  http = inject(HttpClient);

  getForms() {
    return this.http.get<FormList>('mocks/forms.json');
  }

  getForm(id: string) {
    return this.http.get<FormList>('mocks/forms.json').pipe(
      map(forms => forms.list.find(form => form.id === id))
    );
  }
}
