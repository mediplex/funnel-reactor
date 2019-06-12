import { object, string, bool } from "yup";

const useValidation = content => {
  const schema = {};

  // Text Input Validation
  content
    .filter(el => el.inputType === "text-input" && el.validation)
    .forEach(el => {
      let y = string();

      if (el.validation.required)
        y = y.required(el.validation.required.errorMessage);

      if (el.validation.matches)
        y = y.matches(
          el.validation.matches.regex,
          el.validation.required.errorMessage
        );

      schema[el.name] = y;
    });
  
  // Select Validation
  content
    .filter(el => el.inputType === "select-input" && el.validation)
    .forEach(el => {
      let y = string();

      if (el.validation.required)
        y = y.required(el.validation.required.errorMessage);

      schema[el.name] = y;
    });

  // Checkbox Validation
  content
    .filter(el => el.inputType === "checkbox-input" && el.validation)
    .forEach(el => {
      let y = bool();

      if (el.validation.required)
        y = y.oneOf([true], el.validation.required.errorMessage);

      schema[el.name] = y;
    });

  return object().shape(schema);
};

export default useValidation;
