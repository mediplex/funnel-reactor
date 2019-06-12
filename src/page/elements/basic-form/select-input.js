import React from 'react';
import { TextField } from '@material-ui/core';

const SelectInput = props => {
  return (
    <TextField
      helperText={props.form.touched[props.name] ? props.form.errors[props.name] : ''}
      error={props.form.touched[props.name] && Boolean(props.form.errors[props.name])}
      select
      {...props}
      variant="outlined"
      margin="normal"
      fullWidth
      SelectProps={{
        native: true
      }}
    >
      <option disabled />
      
      {props.options.map(option => <option key={option}>{option}</option>)}

    </TextField>
  );
};

export default SelectInput;
