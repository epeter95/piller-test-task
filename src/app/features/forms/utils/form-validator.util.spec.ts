import {mapValidators} from './form-validator.util';

describe('mapValidators', () => {

  it('should return empty array if no validators defined', () => {
    const question: any = {
      type: 'text'
    };

    const result = mapValidators(question);

    expect(result).toEqual([]);
  });

  it('should map required validator', () => {
    const question: any = {
      type: 'text',
      validators: [{type: 'required'}]
    };

    const result = mapValidators(question);

    expect(result.length).toBe(1);

    // test validator works
    const control = {value: null} as any;
    const error = result[0](control);

    expect(error).toEqual({required: true});
  });

  it('should map min validator correctly', () => {
    const question: any = {
      type: 'number',
      validators: [{type: 'min', data: 5}]
    };

    const result = mapValidators(question);

    const control = {value: 3} as any;
    const error = result[0](control);

    expect(error).toEqual({min: {min: 5, actual: 3}});
  });

  it('should filter invalid validators for checkbox', () => {
    const question: any = {
      type: 'checkbox',
      validators: [
        {type: 'required'},
        {type: 'min', data: 5} // invalid
      ]
    };

    const result = mapValidators(question);

    expect(result.length).toBe(1);
  });

});
