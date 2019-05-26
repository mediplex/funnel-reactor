import React from "react";
import {
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormControl,
  FormGroup
} from "@material-ui/core";

const CheckboxInput = props => {
  return (
    <FormControl
      fullWidth
      required
      error={ props.form.touched[props.name] && Boolean(props.form.errors[props.name])
      }
      component="fieldset"
    >
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={props.value} {...props} />}
          label={props.label}
        />
        <FormHelperText>{props.form.touched[props.name] ? props.form.errors[props.name] : null}</FormHelperText>
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxInput;
