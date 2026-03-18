import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormService} from '../../services/form.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatStep, MatStepLabel, MatStepper} from '@angular/material/stepper';
import {MatButton} from '@angular/material/button';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs';
import {toSlug} from '../../../../shared/utilities/slug';

@Component({
  selector: 'app-form-wizard',
  imports: [
    MatStep,
    MatStepper,
    MatStepLabel,
    MatButton,
    RouterLink
  ],
  templateUrl: './form-wizard.component.html',
  styleUrl: './form-wizard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWizardComponent {
  formService = inject(FormService);
  breakpointObserver = inject(BreakpointObserver);
  isMobile = toSignal(
    this.breakpointObserver.observe('(max-width: 768px)')
      .pipe(map(result => result.matches)),
    {initialValue: false}
  );
  slug = inject(ActivatedRoute).snapshot.params['slug'];
  form = toSignal(this.formService.getForm(this.slug));
  protected readonly toSlug = toSlug;
}
