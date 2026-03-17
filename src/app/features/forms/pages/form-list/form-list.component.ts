import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormService} from '../../services/form.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {toSlug} from '../../../../shared/utilities/slug';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-form-list',
  imports: [
    RouterLink
  ],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormListComponent {
  formService = inject(FormService);
  formList = toSignal(this.formService.getForms());
  protected readonly toSlug = toSlug;
}
