import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormService} from '../../services/form.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-wizard',
  imports: [],
  templateUrl: './form-wizard.component.html',
  styleUrl: './form-wizard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWizardComponent {
  formService = inject(FormService);
  slug = inject(ActivatedRoute).snapshot.params['slug'];
  form = toSignal(this.formService.getForm(this.slug));
}
