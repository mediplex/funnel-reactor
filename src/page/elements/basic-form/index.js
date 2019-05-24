import React from "react";

import useValidation from "./use-validation";
import Text from "./text";

import { Button } from "@material-ui/core";

import { Formik, Form, Field } from "formik";

const Input = props => {
  switch (props.type) {
    case "text":
      return <Text {...props} />;
    default:
      return <></>;
  }
};

const BasicForm = props => {
  const basicFormSchema = useValidation(props.data.content);

  const setInitialValues = () => {
    const values = {};
    props.data.content.forEach(el => (values[el.name] = ""));
    return values;
  };

  const handleSubmit = values => console.log(JSON.stringify(values, null, 2));

  return (
    <Formik
      initialValues={setInitialValues()}
      onSubmit={handleSubmit}
      validationSchema={basicFormSchema}
      render={() => (
        <Form>
          {props.data.content.map((el, index) => (
            <Field key={index} name={el.name}>
              {({ field, ...props }) => {
                return (
                  <Input
                    placeholder={el.placeholder}
                    type={el.type}
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

export default BasicForm;
