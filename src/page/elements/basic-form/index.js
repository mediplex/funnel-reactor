import React, { useState } from "react";

import useValidation from "./use-validation";

import TextInput from "./text-input";
import SelectInput from "./select-input";
import CheckboxInput from "./checkbox-input";

import { Button } from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import useInitialValues from "./use-initial-values";

import { Redirect } from "react-router-dom";

const DynamicInput = props => {
  const inputType = props.inputType;

  const sanitizedProps = { ...props };

  delete sanitizedProps.inputType;

  switch (inputType) {
    case "text-input":
      return <TextInput {...sanitizedProps} />;
    case "select-input":
      return <SelectInput {...sanitizedProps} />;
    case "checkbox-input":
      return <CheckboxInput {...sanitizedProps} />;
    default:
      return <></>;
  }
};

const BasicForm = props => {
  const [formSubmited, setFormSubmited] = useState(false);

  const basicFormSchema = useValidation(props.data.elements);
  const initialValues = useInitialValues(props.data.elements);

  //TODO: trim strings
  //TODO: lowercase Emails
  //TODO: useEffect
  const handleSubmit = values => {
    console.log(JSON.stringify(values, null, 2));
    setFormSubmited(true);
  };

  const Render = () => {
    if (formSubmited) return <Redirect to={`/${props.data.redirectTo}`} />;
    else
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={basicFormSchema}
          render={() => (
            <Form>
              {props.data.elements.map((el, index) => (
                <Field key={index} name={el.name}>
                  {({ field, ...props }) => {
                    return (
                      <DynamicInput
                        {...(el.inputType === "text-input" && el.multiline
                          ? { multiline: el.multiline, rows: 5 }
                          : {})}
                        {...(el.inputType === "select-input"
                          ? { options: el.options }
                          : {})}
                        {...(el.inputType === "text-input"
                          ? { placeholder: el.placeholder }
                          : {})}
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
      );
  };

  return <Render />;
};

export default BasicForm;
