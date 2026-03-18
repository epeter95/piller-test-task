export const VALIDATORS_BY_TYPE: Record<string, string[]> = {
  text: ['required', 'minlength', 'maxlength'],
  number: ['required', 'min', 'max'],
  checkbox: ['required'],
  select: ['required']
};
