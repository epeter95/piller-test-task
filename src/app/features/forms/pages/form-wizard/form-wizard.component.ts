import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {FormService} from '../../services/form.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from '@angular/material/stepper';
import {MatButton} from '@angular/material/button';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map, tap} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Form, QuestionType, QuestionValidator} from '../../models/form.model';
import {CategoryComponent} from '../../components/category/category.component';

@Component({
  selector: 'app-form-wizard',
  imports: [
    MatStep,
    MatStepper,
    MatStepLabel,
    MatButton,
    RouterLink,
    CategoryComponent,
    MatStepperPrevious,
    MatStepperNext
  ],
  templateUrl: './form-wizard.component.html',
  styleUrl: './form-wizard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWizardComponent {
  fb = inject(FormBuilder);
  formService = inject(FormService);
  breakpointObserver = inject(BreakpointObserver);
  formId = inject(ActivatedRoute).snapshot.params['id'];
  private readonly isMobile = toSignal(
    this.breakpointObserver.observe('(max-width: 768px)')
      .pipe(map(result => result.matches)),
    {initialValue: false}
  );
  orientation = computed(() =>
    this.isMobile() ? 'vertical' : 'horizontal'
  );
  formElement = toSignal(this.formService.getForm(this.formId).pipe(
    tap(form => {
      if (form) {
        this.buildForm(form);
        console.log(this.form.value);
      }
    })
  ));
  form!: FormGroup;

  private buildForm(formElement: Form) {
    const stepGroups: Record<string, FormGroup> = {};

    formElement.steps.forEach((step) => {
      const controls: Record<string, FormControl> = {};

      step.categories.forEach(category => {
        category.questions.forEach(question => {
          controls[question.id] = this.fb.control(
            this.getInitialControlValue(question.type),
            this.mapValidators(question.validators)
          );
        });
      });

      stepGroups[step.id] = this.fb.group(controls);
    });

    this.form = this.fb.group(stepGroups);
  }

  private getInitialControlValue(type: QuestionType) {
    switch (type) {
      case 'number': {
        return null;
      }
      case 'checkbox': {
        return false;
      }
      default: {
        return '';
      }
    }
  }

  private mapValidators(validators?: QuestionValidator[]) {
    if (!validators) return [];

    return validators.map(validator => {
      switch (validator.type) {
        case 'required':
          return Validators.required;
        case 'min':
          return Validators.min(Number(validator.data));
        case 'max':
          return Validators.max(Number(validator.data));
        case 'minlength':
          return Validators.minLength(Number(validator.data));
        case 'maxlength':
          return Validators.maxLength(Number(validator.data));
      }
    });
  }
}
