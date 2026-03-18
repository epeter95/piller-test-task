import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Category} from '../../models/form.model';
import {QuestionComponent} from '../question/question.component';

@Component({
  selector: 'app-category',
  imports: [
    QuestionComponent
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  category = input.required<Category>();
  // formGroup = input.required<FormGroup>();
}
