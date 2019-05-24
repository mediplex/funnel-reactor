import * as Yup from "yup";

const useValidation = content => {
  const schema = {};
  content.forEach(el => {
    let y;
    switch (el.validation.type) {
      case "string":
        y = Yup.string();
        if (el.validation.email) y = y.email(el.validation.email.customMessage);
        if (el.validation.required)
          y = y.required(el.validation.required.customMessage);
        if (el.validation.min)
          y = y.min(el.validation.min.value, el.validation.min.customMessage);
        if (el.validation.max)
          y = y.max(el.validation.max.value, el.validation.max.customMessage);
        break;
      default:
        console.log("no validation found");
    }

    schema[el.name] = y;
  });

  return Yup.object().shape(schema);
};

export default useValidation;
