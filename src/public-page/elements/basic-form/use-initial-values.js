const useInitialValues = formElement => {
  const values = {};

  formElement
    .filter(
      el => el.inputType === "text-input" || el.inputType === "select-input"
    )
    .forEach(el => (values[el.name] = ""));

//   //   formElement
//   //     .filter(el => el.inputType === "select-input")
//   //     .forEach(el =>
//   //       el.defaultValue
//   //         ? (values[el.name] = el.defaultValue)
//   //         : (values[el.name] = "")
//   //     );

  formElement
    .filter(el => el.inputType === "checkbox-input")
    .forEach(el =>
      el.defaultValue
        ? (values[el.name] = el.defaultValue)
        : (values[el.name] = false)
    );

  return values;
};

export default useInitialValues;
