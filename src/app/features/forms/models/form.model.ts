export interface FormList {
  list: Array<Form>
}

export interface Form {
  name: string;
  steps: Array<Step>;
  closed: boolean;
}

export interface Step {
  title: string;
  categories: Array<Category>;
}

export interface Category {
  name: string;
  description: string;
  questions: Array<Question>;
}

export interface Question {
  label: string;
  description?: string;
  type: QuestionType;
  selectOptions?: Array<string>;
  validators?: Array<{
    type: ValidatorType;
    data?: string | number;
  }>;
}

type QuestionType = 'text' | 'number' | 'checkbox' | 'select';

type ValidatorType = 'required' | 'min' | 'max' | 'minlength' | 'maxlength';
