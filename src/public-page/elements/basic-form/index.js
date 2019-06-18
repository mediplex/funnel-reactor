import React, { useState, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { object as yupObject, string as yupString, bool as yupBool } from 'yup';

import TextInput from './text-input';
import SelectInput from './select-input';
import CheckboxInput from './checkbox-input';

import firebase, { firestore } from '../../../firebase';

const DynamicInput = props => {
  const { inputType } = props;
  const sanitizedProps = { ...props };
  delete sanitizedProps.inputType;
  switch (inputType) {
    case 'text-input':
      return <TextInput {...sanitizedProps} />;
    case 'select-input':
      return <SelectInput {...sanitizedProps} />;
    case 'checkbox-input':
      return <CheckboxInput {...sanitizedProps} />;
    default:
      return <></>;
  }
};

const BasicForm = ({ data }) => {
  const [formData, setFormData] = useState();
  const [basicFormSchema, setBasicFormSchema] = useState();
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    firestore
      .collection('forms')
      .doc(data.basicFormId)
      .get()
      .then(doc => {
        if (doc.exists) setFormData(doc.data());
        else console.log('No such document!');
      })
      .catch(err => console.log(err));
  }, [data]);

  useEffect(() => {
    if (formData && formData.elements)
      setInitialValues(() => {
        const values = {};
        formData.elements.forEach(el => {
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
      });
    if (formData && formData.elements)
      setBasicFormSchema(() => {
        const schema = {};

        formData.elements.forEach(el => {
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
      });
  }, [formData]);

  // setBasicFormSchema(useValidation(formData));
  // setInitialValues(useInitialValues(formData));

  // TODO: trim strings
  // TODO: lowercase Emails
  const handleSubmit = values => {
    const lead = { ...values, optInDate: new Date() };

    firestore
      .collection('lists')
      .doc('vhHr4FEEE2SKEr3IC4cX')
      .update({
        contacts: firebase.firestore.FieldValue.arrayUnion(lead)
      })
      .then(() => console.log('form submitted successfully'))
      .catch(err => console.log(err));

    console.log(JSON.stringify(lead, null, 2));

    // props.history.push(data.redirectTo);
  };

  return (
    (!(formData && basicFormSchema && initialValues) && <div>loading...</div>) ||
    (formData && basicFormSchema && initialValues && (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={basicFormSchema}
        render={() => (
          <Form>
            {formData.elements.map((el, index) => (
              <Field key={index} name={el.name}>
                {({ field, ...props }) => {
                  return (
                    <DynamicInput
                      {...(el.inputType === 'text-input' && el.multiline ? { multiline: el.multiline, rows: 5 } : {})}
                      {...(el.inputType === 'select-input' ? { options: el.options } : {})}
                      {...(el.inputType === 'text-input' ? { placeholder: el.placeholder } : {})}
                      inputType={el.inputType}
                      label={el.label}
                      {...field}
                      {...props}
                    />
                  );
                }}
              </Field>
            ))}
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      />
    ))
  );
};

export default BasicForm;
