import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {FormService} from '../../services/form.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatStep, MatStepper, MatStepperNext, MatStepperPrevious} from '@angular/material/stepper';
import {MatButton} from '@angular/material/button';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map, tap} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Form, QuestionType} from '../../models/form.model';
import {CategoryComponent} from '../../components/category/category.component';
import {mapValidators} from '../../utils/form-validator.util';

@Component({
  selector: 'app-form-wizard',
  imports: [
    MatStep,
    MatStepper,
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
      }
    })
  ));
  form!: FormGroup;

  getStepGroup(stepId: string): FormGroup {
    return this.form.controls[stepId] as FormGroup;
  }

  private buildForm(formElement: Form) {
    const stepGroups: Record<string, FormGroup> = {};

    formElement.steps.forEach((step) => {
      const controls: Record<string, FormControl> = {};

      step.categories.forEach(category => {
        category.questions.forEach(question => {
          controls[question.id] = this.fb.control(
            this.getInitialControlValue(question.type),
            mapValidators(question)
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
}
