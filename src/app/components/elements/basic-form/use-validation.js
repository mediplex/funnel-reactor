import { object as yupObject, string as yupString, bool as yupBool } from 'yup';

const useValidation = elements => {
  const schema = {};

  elements.forEach(el => {
    let y;
    if (el.validation)
      switch (el.inputType) {
        case 'text-input':
          y = yupString();
          if (el.validation.required) y = y.required(el.validation.required.errorMessage);
          if (el.validation.matches)
            y = y.matches(new RegExp(el.validation.matches.regex), el.validation.matches.errorMessage);
          break;

        case 'select-input':
          y = yupString();
          if (el.validation.required) y = y.required(el.validation.required.errorMessage);
          break;

        case 'checkbox-input':
          y = yupBool();
          if (el.validation.required) y = y.oneOf([true], el.validation.required.errorMessage);
          break;

        default:
          break;
      }
    schema[el.name] = y;
  });

  return yupObject().shape(schema);
};

export default useValidation;
