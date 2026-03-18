import {Question} from '../models/form.model';
import {VALIDATORS_BY_TYPE} from '../configs/form-validator.config';
import {Validators} from '@angular/forms';

export function mapValidators(question: Question) {
  if (!question.validators) return [];

  const allowed = VALIDATORS_BY_TYPE[question.type];

  return question.validators
    .filter(validator => allowed.includes(validator.type))
    .map(validator => {
      switch (validator.type) {
        case 'required':
          return question.type === 'checkbox' ? Validators.requiredTrue : Validators.required;
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
