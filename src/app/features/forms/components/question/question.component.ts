import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Question} from '../../models/form.model';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatOption} from '@angular/material/core';
import {MatError, MatFormField, MatLabel, MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-question',
  imports: [
    MatCheckbox,
    MatOption,
    MatSelect,
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatError
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {
  question = input.required<Question>();
  questionControl = input.required<FormControl>();

  isRequired() {
    return this.questionControl().hasError('required');
  }

  getErrorMessage(): string | null {
    if (!this.questionControl()?.errors || !this.questionControl().touched || this.questionControl().hasError('required')) {
      return null;
    }

    const errors = this.questionControl().errors;
    if (errors) {
      if (errors['min']) {
        return `Minimum érték: ${errors['min'].min}`;
      }

      if (errors['max']) {
        return `Maximum érték: ${errors['max'].max}`;
      }

      if (errors['minlength']) {
        return `Minimum hossz: ${errors['minlength'].requiredLength}`;
      }

      if (errors['maxlength']) {
        return `Maximum hossz: ${errors['maxlength'].requiredLength}`;
      }
    }


    return 'Érvénytelen érték';
  }

  protected readonly Validators = Validators;
}
