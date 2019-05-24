import React from "react";
import { TextField } from "@material-ui/core";

const Text = props => {
  return (
    <TextField
      helperText={props.form.touched[props.name] ? props.form.errors[props.name] : ""}
      error = {props.form.touched[props.name] && Boolean(props.form.errors[props.name])}
      {...props}
      variant="outlined"
      margin="normal"
      fullWidth
    />
  );
};

export default Text;
