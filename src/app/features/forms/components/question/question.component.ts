import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Question} from '../../models/form.model';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatOption} from '@angular/material/core';
import {MatFormField, MatLabel, MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-question',
  imports: [
    MatCheckbox,
    MatOption,
    MatSelect,
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {
  question = input.required<Question>();
  questionControl = input.required<FormControl>();
}
