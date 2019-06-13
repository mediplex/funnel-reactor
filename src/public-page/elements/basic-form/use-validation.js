import { object, string, bool } from 'yup';

const useValidation = elements => {
  const schema = {};

  console.log(elements);
  // Text Input Validation
  elements
    .filter(el => el.inputType === 'text-input' && el.validation)
    .forEach(el => {
      let y = string();

      if (el.validation.required) y = y.required(el.validation.required.errorMessage);

      if (el.validation.matches)
        y = y.matches(new RegExp(el.validation.matches.regex), el.validation.matches.errorMessage);

      schema[el.name] = y;
    });

  // Select Validation
  elements
    .filter(el => el.inputType === 'select-input' && el.validation)
    .forEach(el => {
      let y = string();

      if (el.validation.required) y = y.required(el.validation.required.errorMessage);

      schema[el.name] = y;
    });

  // Checkbox Validation
  elements
    .filter(el => el.inputType === 'checkbox-input' && el.validation)
    .forEach(el => {
      let y = bool();

      if (el.validation.required) y = y.oneOf([true], el.validation.required.errorMessage);

      schema[el.name] = y;
    });

  console.log(schema);
  return object().shape(schema);
};

export default useValidation;
