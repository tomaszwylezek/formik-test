import * as React from "react";

import {FieldProps} from "formik";

export const InputComponent: React.SFC<{ label?: string } & FieldProps> =
  ({
     field, // { name, value, onChange, onBlur }
     form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
     ...props
   }): JSX.Element => (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <input type="text" {...field} {...props} id={field.name}/>
      {touched[field.name] &&
      errors[field.name] &&
      <div className="error" style={{marginTop: '10px', color: 'red'}}>{errors[field.name]}</div>}
    </div>
  );
