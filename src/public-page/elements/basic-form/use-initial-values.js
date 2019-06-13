const useInitialValues = formElements => {
  const values = {};

  formElements.forEach(el => {
    switch (el.inputType) {
      case 'text-input':
        values[el.name] = '';
        break;
      
      case 'select-input':
        values[el.name] = '';
        break;

      case 'checkbox-input':
        values[el.name] = el.defaultValue || false;
        break;

      default:
        break;
    }
  });

  // formElements
  //   .filter(el => el.inputType === 'text-input' || el.inputType === 'select-input')
  //   .forEach(el => (values[el.name] = ''));

  //   //   formElement
  //   //     .filter(el => el.inputType === "select-input")
  //   //     .forEach(el =>
  //   //       el.defaultValue
  //   //         ? (values[el.name] = el.defaultValue)
  //   //         : (values[el.name] = "")
  //   //     );

  // formElements
  //   .filter(el => el.inputType === 'checkbox-input')
  //   .forEach(el => (el.defaultValue ? (values[el.name] = el.defaultValue) : (values[el.name] = false)));

  console.log(values);

  return values;
};

export default useInitialValues;
