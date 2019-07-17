import { useState, useEffect } from 'react';
// import yup from 'yup';
import { object as yupObject, string as yupString, bool as yupBool } from 'yup';
import dynamic from 'next/dynamic';

import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';

import Router from 'next/router';
import TextInput from './text-input';
// import SelectInput from './select-input';
// import CheckboxInput from './checkbox-input';


// const TextInput = dynamic(import('./text-input'));
const SelectInput = dynamic(import('./select-input'));
const CheckboxInput = dynamic(import('./checkbox-input'));

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
      return <div>Form Element Not Found</div>;
  }
};

const BasicForm = ({ data }) => {
  const [basicFormSchema, setBasicFormSchema] = useState();
  const [initialValues, setInitialValues] = useState();

  const [inittiated, setInitiated] = useState(false);
  // const [basicForm, setBasicForm] = useState();

  const init = () => {
    if (data.elements) {
      const values = {};
      data.elements.forEach(el => {
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
      setInitialValues(values);

      const schema = {};
      data.elements.forEach(el => {
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

      setBasicFormSchema(yupObject().shape(schema));
    }
  };

  // const fetchBasicForm = async () => {
  //   const firestore = await import('../../../firebase').then(({ firestore }) => firestore);

  //   const bf = await firestore
  //     .collection('basic-forms')
  //     .doc(data.basicFormId)
  //     .get()
  //     .then(doc => {
  //       if (doc.exists) {
  //         return doc.data();
  //       }
  //     })
  //     .catch(err => console.log(err));
  //   return bf;
  // };

  useEffect(() => {
    if (data) {
      init();
      setInitiated(true);
    }
    // else {
    //   fetchBasicForm().then(bf => setBasicForm(bf));
    // }
  }, [data]);

  const handleSubmit = async values => {
    console.log('form submitted');

    const [firebase, firestore] = await import('../../../firebase').then(({ firebase, firestore }) => [
      firebase,
      firestore
    ]);

    firestore
      .collection('lists')
      .doc(data.listId)
      .update({
        contacts: firebase.firestore.FieldValue.arrayUnion(values)
      })
      .then(() => {
        console.log('redirect to ');
        Router.push(`/?path=${data.redirectTo}`, `/${data.redirectTo}`);
      })
      .catch(error => console.error(error));
  };

  return data && inittiated ? (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={basicFormSchema}
      render={() => (
        <Form>
          {data.elements.map((el, index) => (
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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              backgroundColor: 'rgb(255, 55, 55)',
              color: '#fff',
              padding: '2rem',
              marginTop: '1.5rem'
            }}
          >
            I want to study in Turkey
          </Button>
        </Form>
      )}
    />
  ) : (
    // <CircularProgress />
    <>form loading</>
  );
};

export default BasicForm;
