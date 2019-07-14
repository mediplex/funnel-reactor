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

  return values;
};

export default useInitialValues;
