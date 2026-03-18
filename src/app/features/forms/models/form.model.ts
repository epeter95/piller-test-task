export interface FormList {
  list: Array<Form>
}

export interface Form {
  id: string;
  name: string;
  steps: Array<Step>;
  closed: boolean;
}

export interface Step {
  id: string;
  title: string;
  categories: Array<Category>;
}

export interface Category {
  name: string;
  description: string;
  questions: Array<Question>;
}

export interface Question {
  id: string;
  label: string;
  description?: string;
  type: QuestionType;
  selectOptions?: Array<string>;
  validators?: Array<QuestionValidator>;
}

export interface QuestionValidator {
  type: ValidatorType;
  data?: string | number;
}

export type QuestionType = 'text' | 'number' | 'checkbox' | 'select';

type ValidatorType = 'required' | 'min' | 'max' | 'minlength' | 'maxlength';
