import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { object as yupObject, string as yupString, bool as yupBool } from 'yup';

import TextInput from './text-input';
import SelectInput from './select-input';
import CheckboxInput from './checkbox-input';
import * as actions from '../../../store/actions';

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

const BasicForm = ({ data, basicForm, fetchBasicForm, basicFormSubmitting }) => {
  const [basicFormSchema, setBasicFormSchema] = useState();
  const [initialValues, setInitialValues] = useState();

  const [basicFormState, setBasicFormState] = useState('loading');

  const [inittiated, setInitiated] = useState(false);

  const init = () => {
    if (basicForm.elements)
      setInitialValues(() => {
        const values = {};
        basicForm.elements.forEach(el => {
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
    if (basicForm.elements)
      setBasicFormSchema(() => {
        const schema = {};

        basicForm.elements.forEach(el => {
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
  };

  useEffect(() => {
    if (basicForm) {
      if (!inittiated) {
        init();
        setInitiated(true);
        setBasicFormState('ready');
      }
    } else {
      setBasicFormState('loading');
      fetchBasicForm(data.basicFormId);
    }
  }, [basicForm, fetchBasicForm, data.basicFormId, inittiated]);

  const handleSubmit = values => {
    setBasicFormState('submitting');
    const basicFormData = { ...values, optInDate: new Date() };
    basicFormSubmitting(data.basicFormId, data.listId, basicFormData);
    setBasicFormState('submitted');
  };

  switch (basicFormState) {
    case 'ready':
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={basicFormSchema}
          render={() => (
            <Form>
              {basicForm.elements.map((el, index) => (
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
                {basicFormState === 'ready' && 'Submit'}
                {basicFormState === 'submitting' && 'Submitting'}
              </Button>
            </Form>
          )}
        />
      );
    case 'submitted':
      return <Redirect push to={basicForm.redirectTo} />;
    default:
      return <>basic form loading...</>;
  }
};

const mapStateToProps = (state, ownProps) => ({
  basicForm: state.basicForms[ownProps.data.basicFormId]
});

const mapDispatchToProps = dispatch => ({
  fetchBasicForm: basicFormId => dispatch(actions.fetchBasicForm(basicFormId)),
  basicFormSubmitting: (basicFormId, listId, basicForm) =>
    dispatch(actions.basicFormSubmitting(basicFormId, listId, basicForm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicForm);
